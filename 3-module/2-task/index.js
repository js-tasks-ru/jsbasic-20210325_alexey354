function filterRange(arr, a, b) {
  let newData = arr.filter((c) => c > a && c < b || c === a || c === b);

  return newData;
}
