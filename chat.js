var friendButton = document.getElementsByClassName("friendButton");
var meButton = document.getElementsByClassName("meButton");
var chatOne = document.getElementById("friend");
var chatTwo = document.getElementById("me");
var inputFriend = document.getElementById("sendByFriend");
var inputMe = document.getElementById("sendByMe");



friendButton[0].addEventListener('click', chatSend);
meButton[0].addEventListener('click', chatSend2);

function chatSend(){
var savedChatByMe = document.createElement('p');
var savedChatByFriend = document.createElement('p');
savedChatByFriend.setAttribute('class','allChat');
savedChatByMe.setAttribute('class','allChatByMe');
savedChatByFriend.textContent = inputFriend.value;
chatOne.appendChild(savedChatByFriend);
savedChatByMe.textContent = inputFriend.value;
chatTwo.appendChild(savedChatByMe)

}


function chatSend2(){
var savedChatByMe = document.createElement('p');
var savedChatByFriend = document.createElement('p');
savedChatByMe.setAttribute('class','allChat');
savedChatByMe.textContent = inputMe.value;
chatTwo.appendChild(savedChatByMe)
savedChatByFriend.setAttribute('class','allChatByMe');
savedChatByFriend.textContent = inputMe.value;
chatOne.appendChild(savedChatByFriend);

}
