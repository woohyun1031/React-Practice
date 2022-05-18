const max = (numbers) => {
  const result = Math.max(...numbers);
  return result;
};

const min = (numbers) => {
  const result = Math.min(...numbers);
  return result;
};

const avg = (numbers) =>
  numbers.reduce(
    (acc, current, index, { length }) => acc + current / length,
    0
  );

const sort = (numbers) => numbers.sort((a, b) => a - b);

const median = (numbers) => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};

const mode = (numbers) => {
  const counts = numbers.reduce(
    (acc, current) => acc.set(current, acc.get(current) + 1 || 1),
    new Map()
  );

  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    (number) => counts.get(number) === maxCount
  );

  if (modes.length === numbers.length) {
    // 최빈값이 없음
    return null;
  }

  if (modes.length > 1) {
    // 최빈값이 여러개
    return modes;
  }
  // 최빈값이 하나
  return modes[0];
};

exports.max = max;
exports.min = min;
exports.avg = avg;
exports.sort = sort;
exports.median = median;
exports.mode = mode;
