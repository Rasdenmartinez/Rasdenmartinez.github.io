(function(){

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoPPhIoKz6ZpDjdFNXu6SiP14ft-gZtFQ",
    authDomain: "iot2016-b397b.firebaseapp.com",
    databaseURL: "https://iot2016-b397b.firebaseio.com",
//    projectId: "iot2016-b397b",
    storageBucket: "iot2016-b397b.appspot.com",
  //  messagingSenderId: "139828741250"
  };
  firebase.initializeApp(config);
  
  //obtener elementos
  const preObject = document.getElementById('objeto');
  //crear referencias
  const dbRefObject = firebase.database().ref().child('objeto');
  
  //sincronizar cambios objeto
  dbRefObject.on('value', snap => {
    preObject.innerText=JSON.stringify(snap.val(),null,3);
  });
  
} ());
