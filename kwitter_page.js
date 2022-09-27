//YOUR FIREBASE LINKS
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

function send()
{
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

//End code
      } });  }); }
getData();
