var firebaseConfig = {
  apiKey: "AIzaSyAoWC5CzurS6CuWlLeJy1x-r1q8OTy-bTs",
  authDomain: "letschatwebapplication.firebaseapp.com",
  databaseURL: "https://letschatwebapplication-default-rtdb.firebaseio.com",
  projectId: "letschatwebapplication",
  storageBucket: "letschatwebapplication.appspot.com",
  messagingSenderId: "762706695831",
  appId: "1:762706695831:web:c84c88674cd3b9e8e7bbd2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signin() {
  user_name = document.getElementById("user_name").value ;
room_name = document.getElementById("room_name").value ;
    localStorage.setItem("user_name" , user_name) ;
    localStorage.setItem("room_name" , room_name) ;
    mmmbtn = " <div id='btn'> <button onclick='addRoom()' class='btn btn-primary w-100 py-2     mbtn' id='mbtm'> Add Room </button> </div> " ;
    document.getElementById("btn").innerHTML = mmmbtn ;
} 
 user_name = localStorage.getItem("user_name") ;
 room_name = localStorage.getItem("room_name") ;

function addRoom() {
  room_name = localStorage.getItem("room_name") ;
  user_name = localStorage.getItem("user_name") ;
  firebase.database().ref("/").child(room_name).update({
    purpose : "Adding Room Name"
}) ;
    localStorage.setItem("user_name" , user_name) ;
    localStorage.setItem("room_name" , room_name) ;
window.location = "chat_page.html" ;
}

function logout() {
    localStorage.removeItem("user_name") ;
    localStorage.removeItem("room_name") ;

    window.location = "index.html" ;
}


  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name =" + Room_names) ;
   row = "<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr></hr> " ;
   document.getElementById("output").innerHTML+=row ;
   //End code
   });});}

getData();

   function redirectToRoomName(name) {
         console.log(name) ;
         localStorage.setItem("room_name" , name) ;
         window.location = "kwitter_page.html" ;
   }