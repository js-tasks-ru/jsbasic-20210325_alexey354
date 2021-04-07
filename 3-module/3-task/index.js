function camelize(str) {
  let arr_str = str.split('-');
  let arr_capitalized = arr_str.map((val, indx) => {
    if ( indx === 0 ) {
      return val;
    }

    return val.charAt(0).toUpperCase() + val.slice(1);
  });

  return arr_capitalized.join('');
}
