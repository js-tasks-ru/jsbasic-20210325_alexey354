function makeDiagonalRed(table) {
  let i = 0;
  for (let item of table.rows) {
    item.cells[i].style.background = 'red';
    i++;
  }
}
