
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAjqZiZuicCeF_bwkDHIE_Sh8W5t1DHxEQ",
      authDomain: "copy-of-so-called-kwitter.firebaseapp.com",
      databaseURL: "https://copy-of-so-called-kwitter-default-rtdb.firebaseio.com",
      projectId: "copy-of-so-called-kwitter",
      storageBucket: "copy-of-so-called-kwitter.appspot.com",
      messagingSenderId: "430457862456",
      appId: "1:430457862456:web:b4b26ef8a42b8f6e5d69cd",
      measurementId: "G-L599TRFRDN"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("ouput").innerHTML += row;
      
      //End code
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
            window.location = "index.html";
}