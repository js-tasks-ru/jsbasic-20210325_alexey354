function showSalary(users, age) {
  let output;

  users.forEach(user => {

    if ( user.age <= age ) {   
      let data = user.name + ', ' + user.balance;

      if ( output !== undefined ) {
      	output = output + '\n' + data;
      } else {
        output = data;
      }
    }
  });

  if ( output ) {
    return output;
  }
}