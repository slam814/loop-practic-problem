var myFriendsAge =[12, 34, 59, 44, 100, 77, 43, 66, 88, 88, 77];
for(i = 0; i < myFriendsAge.length; i++){

    var friendsAge = myFriendsAge[i];

    if(friendsAge > 50){
        continue;
    }
    console.log(friendsAge);
}
