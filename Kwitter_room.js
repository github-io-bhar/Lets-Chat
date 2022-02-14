// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuvrAkWwyLM8w9bMa2McDjbCbvgTOJ-2M",
  authDomain: "medichat-8857f.firebaseapp.com",
  databaseURL: "https://medichat-8857f-default-rtdb.firebaseio.com",
  projectId: "medichat-8857f",
  storageBucket: "medichat-8857f.appspot.com",
  messagingSenderId: "8427166274",
  appId: "1:8427166274:web:75e6e9365228188149ebdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML = row;
  //End code
  });});}
getData();

function addRoom() {
  room_names = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter_page.html";
}

