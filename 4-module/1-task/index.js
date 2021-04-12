function makeFriendsList(friends) {
  let list = document.createElement('ul');

  friends.map(function(friend){
  	let item = document.createElement('li');
    item.appendChild(document.createTextNode(friend.firstName + ' ' + friend.lastName));
    
    list.appendChild( item );
  });

  return list;
}