//login

var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
	firebase.auth().signInWithPopup(provider)
		.then(function(result){
		guardaDatos(result.user);
		console.log(result.user);
		$('#login').hide();
		$('#root').append("<img src='"+result.user.photoURL+"'/>");
	});
});

//Esta funcion guarda datos automaticamente
function guardaDatos(user){
	var usuario = {
		uid:user.uid,
		nombre:user.displayName,
		 email:user.email,
		  foto:user.photoURL
	}
	firebase.database().ref("telmex/"+ user.uid)
	.set(usuario)
}


//escribir en la base de datos

$('#guardar').click(function(){
	firebase.database().ref("telmex")
	.set({
		nombre: "Andres",
		edad: "26",
		sexo: "masculino"
	})
})

//aqui estoy leyendo de la base de datos
firebase.database().ref("telmex")
.on("child_added",function(s){
	var user= s.val();
	$('#root').append("<img src='"+user.foto+"'/>");

})