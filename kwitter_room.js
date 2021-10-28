var firebaseConfig = {
    apiKey: "AIzaSyAX2oRpJlnw_3YfLH1E5sBZOIV5fWxFSI8",
    authDomain: "kwitter-5eca1.firebaseapp.com",
    databaseURL: "https://kwitter-5eca1-default-rtdb.firebaseio.com",
    projectId: "kwitter-5eca1",
    storageBucket: "kwitter-5eca1.appspot.com",
    messagingSenderId: "142525744991",
    appId: "1:142525744991:web:fbc6d5113901a0b9a3d8ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function add_room(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
      console.log("Room name- " + Room_names);
      row = "<div class = 'room_name' id =" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      window.location="index.html";
      localStorage.removeItem("user_name");
}