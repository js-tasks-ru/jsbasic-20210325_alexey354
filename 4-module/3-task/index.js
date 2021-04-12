  
function highlight(table) {
  let rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    let current_row   = rows[i];
    let current_cells = [...current_row.cells];

    if (current_cells[3].dataset.available === 'true') {
      rows[i].classList.add('available');
    } else if (current_cells[3].dataset.available === 'false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].hidden = true;
    }

    if (current_cells[2].textContent === 'm') {
      rows[i].classList.add('male');
    } else {
      rows[i].classList.add('female');
    }

    let user_age = + current_cells[1].textContent;

    if (user_age < 18) {
      rows[i].style = "text-decoration: line-through";
    }
  }
}