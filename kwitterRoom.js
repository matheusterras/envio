import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWBDUm2Y8O8UjKvU2o856Q11xCosnClmA",
  authDomain: "kwiter-41a28.firebaseapp.com",
  databaseURL: "https://kwiter-41a28-default-rtdb.firebaseio.com",
  projectId: "kwiter-41a28",
  storageBucket: "kwiter-41a28.appspot.com",
  messagingSenderId: "456761504741",
  appId: "1:456761504741:web:c06dff026604b9386ef50c"
};

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
