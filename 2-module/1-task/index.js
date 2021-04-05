function sumSalary(salaries) {
  let sum = 0;

  if ( typeof salaries === 'object' ) {
    for ( prop in salaries ) {
      if ( Number.isInteger(salaries[ prop ] ) ) {
        sum = sum + salaries[ prop ];
      }
    }
  }

  return sum;
}
