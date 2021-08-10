const { bmis } = require('./bmi_category');

function overWeightCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 25 && arr[i] <= 29.9) {
      count++;
      return count;
    }
  }
}

module.exports = overWeightCount;
