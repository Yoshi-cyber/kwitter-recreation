var firebaseConfig = {
      apiKey: "AIzaSyBrztaJSAGD1JJ3hAwBB_GWlmxfiEG0b_A",
      authDomain: "chat-app-5d2fb.firebaseapp.com",
      databaseURL: "https://chat-app-5d2fb-default-rtdb.firebaseio.com",
      projectId: "chat-app-5d2fb",
      storageBucket: "chat-app-5d2fb.appspot.com",
      messagingSenderId: "1074193269944",
      appId: "1:1074193269944:web:d941850c47feacef5d604d",
      measurementId: "G-WNREF667WD"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
 function addRoom() 
 { 
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update(
             { 
                   purpose : "adding room name" 
             });
       localStorage.setItem("room_name", room_name); 
       window.location = "kwitter_page.html"; 
 }
 function getData() 
 {
       firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        
        console.log("Room Name - " + Room_names); 
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
        document.getElementById("output").innerHTML += row;
 
      
       });});}
 getData();
 
 function redirectToRoomName(name) 
 { 
       console.log(name); 
       localStorage.setItem("room_name", name); 
       window.location = "kwitter_page.html"; 
 }
 
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "kwitter_room.html";
      }
      
function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
      
            document.getElementById("msg").value = "";
      }
