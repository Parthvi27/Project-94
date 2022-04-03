
  var firebaseConfig = {
    apiKey: "AIzaSyBqQl3I6tTVoIWQIQekdIgp49TLrTq8ooA",
    authDomain: "project93-7fa00.firebaseapp.com",
    databaseURL: "https://project93-7fa00-default-rtdb.firebaseio.com",
    projectId: "project93-7fa00",
    storageBucket: "project93-7fa00.appspot.com",
    messagingSenderId: "343976852926",
    appId: "1:343976852926:web:aa5358622773208a62cdef"
  };
  
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " +user_name+ "!";
    
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name -" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}