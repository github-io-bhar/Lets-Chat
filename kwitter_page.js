var name;
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
    
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + "onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
getData();






