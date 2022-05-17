const max = (numbers) => {
  const result = Math.max(...numbers);
  return result;
};

const min = (numbers) => {
  const result = Math.min(...numbers);
  return result;
};

const avg = (numbers) => {
  const sum = numbers.reduce((prev, current) => prev + current, 0);
  return sum / numbers.length;
};

exports.max = max;
exports.min = min;
exports.avg = avg;
