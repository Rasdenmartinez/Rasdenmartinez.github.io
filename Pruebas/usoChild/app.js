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
  const ulist = document.getElementById('lista');
  //crear referencias
  const dbRefObject = firebase.database().ref().child('objeto');
  const dbReflist = dbRefObject.child('habilidades');
  
  //sincronizar cambios objeto
  dbRefObject.on('value', snap => {
    preObject.innerText=JSON.stringify(snap.val(),null,3);
  });
  
  //sincronizar cambios lista
  dbRefList.on('child_added', snap=>{
    const li = document.createElement('li');
    li.innerText = snap.val();
    ulist.appendChild(li);
  }
  
());
