var firebaseConfig = {
  apiKey: "AIzaSyCON4_KJjzDzYse9iMuDhMX21GvHYZLaJc",
  authDomain: "letschat-web-app-6fee6.firebaseapp.com",
  databaseURL: "https://letschat-web-app-6fee6-default-rtdb.firebaseio.com",
  projectId: "letschat-web-app-6fee6",
  storageBucket: "letschat-web-app-6fee6.appspot.com",
  messagingSenderId: "112361581383",
  appId: "1:112361581383:web:36e0a7d31208e3ca3bba62"
};

// Initialize Firebase
 firebase.app = initializeApp(firebaseConfig);

user_name = document.getElementById("user_name").value ;
room_name = document.getElementById("room_name").value ;
document.getElementById("user").innerHTML = "Welcome " + user_name + " !"  ;


function signin() {
    localStorage.setItem("User Name" , user_name) ;
    localStorage.setItem("Room Name" , room_name) ;
    mmmbtn = " <div id='btn'> <button onclick='addRoom()' class='btn btn-primary w-100 py-2     mbtn' id='mbtm'> Add Room </button> </div> " ;
    document.getElementById("btn").innerHTML = mmmbtn ;
} 

function addRoom() {
  room_name = localStorage.getItem("Room Name") ;
  user_name = localStorage.getItem("User Name") ;
  firebase.database().ref("/").child(room_name).update({
    purpose : "Adding Room Name"
}) ;
window.location = "chat_page.html" ;
}

function logout() {
    localStorage.removeItem("User Name") ;
    localStorage.removeItem("Room Name") ;
    localStorage.removeItem("Message") ;

    window.location = "index.html" ;
}


  function send_msg() {
    message = document.getElementById("msg").value ;
    document.getElementById("msg").value = "" ;
    localStorage.setItem("Message" , message) ;
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