//implementing group function
const groupBy = (array, property) => {
  return array.reduce((result, obj) => {
    const key = obj[property];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(obj);
    return result;
  }, {});
};

//exporting peoples array and getAdults function using destructured approach
module.exports = { groupBy };
