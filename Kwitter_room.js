// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZeUHwOrDxoT1FIAZuXvRAcFhPshraXJo",
  authDomain: "appointment-d871a.firebaseapp.com",
  databaseURL: "https://appointment-d871a-default-rtdb.firebaseio.com",
  projectId: "appointment-d871a",
  storageBucket: "appointment-d871a.appspot.com",
  messagingSenderId: "59083343329",
  appId: "1:59083343329:web:dbbdddd74396f298e87ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addRoom() {
  room_names = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + room_names);
row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div></hr>";
document.getElementById("output").innerHTML = row;
//End code
});});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}