const countDublicatedItems = (data) => {
  let newArray = [];
  let counts = {};

  for (let i = 0; i < data?.length; i++) {
    if (counts[data[i]]) {
      counts[data[i]] += 1;
    } else {
      counts[data[i]] = 1;
    }
  }

  for (let prop in counts) {
    newArray.push({
      name: prop,
      count: counts[prop],
      isChecked: false,
    });
  }
  return newArray;
};

module.exports = countDublicatedItems;
