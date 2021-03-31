function checkSpam(str) {
  let denied = ['1xBet', 'XXX'];
  let result = denied.filter(word => str.toLowerCase().search(word.toLowerCase()) >= 0 );

  return (result.length) ? true : false;
}
