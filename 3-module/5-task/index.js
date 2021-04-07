function getMinMax(str) {
  let arr = str.split(',').concat(str.split(' '));
  let new_arr = arr.filter((val) => {
    let i = Number( val );

    if (i) {
      return Number(i);
    }
  });

  return {
    "min": Math.min.apply(null, new_arr), 
    "max": Math.max.apply(null, new_arr)
  };
}