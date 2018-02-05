const groupBy = (jsonList, key) => jsonList.reduce((accumulator, currentValue) => {
  (accumulator[currentValue[key]] = accumulator[currentValue[key]] || []).push(currentValue);
  return accumulator;
}, {});

module.exports = groupBy;
