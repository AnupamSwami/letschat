function signin() {
    user_name = document.getElementById("user_name").value ;
    room_name = document.getElementById("room_name").value ;
    localStorage.setItem("User Name" , user_name) ;
    localStorage.setItem("Room Name" , room_name) ;
    greeting = "Hello " + user_name + " !!!" ;
    localStorage.setItem("Greeting" , greeting) ;

    window.location = "chat_page.html" ;
}

function logout() {
    localStorage.removeItem("User Name") ;
    localStorage.removeItem("Room Name") ;
    localStorage.removeItem("Greeting") ;
    localStorage.removeItem("Message") ;

    window.location = "index.html" ;
}

var firebaseConfig = {
    apiKey: "AIzaSyCON4_KJjzDzYse9iMuDhMX21GvHYZLaJc",
    authDomain: "letschat-web-app-6fee6.firebaseapp.com",
    projectId: "letschat-web-app-6fee6",
    storageBucket: "letschat-web-app-6fee6.appspot.com",
    messagingSenderId: "112361581383",
    appId: "1:112361581383:web:36e0a7d31208e3ca3bba62"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function higreet() {
    document.getElementById("greeting").innerHTML = greeting ;
  }

  function send_msg() {
    message = document.getElementById("msg").value ;
    document.getElementById("msg").value = "" ;
    localStorage.setItem("Message" , message) ;
  }