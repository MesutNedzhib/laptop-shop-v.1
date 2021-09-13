const expressAsyncHandler = require("express-async-handler");

const productQueryMiddleware = function (model) {
  return expressAsyncHandler(async function (req, res, next) {
    let query = model.find();

    // Serach by id
    if (req.params.id) {
      query = model.findById(req.params.id);
    }

    // Search by name
    if (req.query.search) {
      const searchObject = {};

      const regex = new RegExp(req.query.search, "i");
      searchObject["name"] = regex;
      query = query.where(searchObject);
    }

    // Pagination
    const page = parseInt(req.query.page) || 1; // default value
    const limit = parseInt(req.query.limit) || 15; // default value

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const pagination = {};
    const total = await model.countDocuments();

    if (startIndex > 0) {
      pagination.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }

    pagination.startIndex = startIndex;
    pagination.limit = limit;

    query =
      query === undefined ? undefined : query.skip(startIndex).limit(limit);

    const queryResults = await query;

    res.queryResults = {
      success: true,
      count: queryResults.length,
      pagination: queryResults.length >= 5 ? pagination : undefined,
      data: queryResults,
    };
    next();
  });
};

module.exports = productQueryMiddleware;
