
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(!matrix) {
    return [];
  }

  for(el of matrix) {
    el.sort((a, b) => a-b);
  }
  matrix = matrix.reduce((acc, cur, i) => {
    return acc.concat((!(i % 2) ? cur : cur.reverse()));
  }, []);
  return matrix;
}
