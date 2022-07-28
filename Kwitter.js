function adduser() 
{ 
user_name = document.getElementById("user_name").value; l
ocalStorage.setItem("user_name", user_name); window.location = "kwitter_room.html";
 }