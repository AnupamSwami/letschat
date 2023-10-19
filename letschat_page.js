var firebaseConfig = {
      apiKey: "AIzaSyCqlUy09dqxaoul0XmsOU9efQVTQVY5xhU",
      authDomain: "kwitter-e9c34.firebaseapp.com",
      databaseURL: "https://kwitter-e9c34-default-rtdb.firebaseio.com",
      projectId: "kwitter-e9c34",
      storageBucket: "kwitter-e9c34.appspot.com",
      messagingSenderId: "764761031356",
      appId: "1:764761031356:web:17cf8b4b5c0e09dd1806b9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log("Room Name =" + Room_names) ;
row = "<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr></hr> " ;
document.getElementById("output").innerHTML+=row ;
//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name ,
            message:msg ,
            like:0
      }) ;
      document.getElementById("msg").value = "" ;
}