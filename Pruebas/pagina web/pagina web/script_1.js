$(document).ready(function() {

  //creamos un objeto de firebase, y le pasamos la URL como parametro
  var ref = new Firebase("https://iot2016-b397b.firebaseio.com/");
  //////obtenemos el ultimo estado
  var b = ref('boton');
  var b2 = ref('boton2');
  /////Estado de bd a botones
	   $("#switch").attr('checked', data.val().b);
	   $("#switch2").attr('checked', data.val().b2);
    
  $("#switch").click(function(){
	  var estado = $(this).is(':checked');
	  b.update({
	    boton:estado
	  });
	});
  $("#switch2").click(function(){
	  var estado = $(this).is(':checked');
	  b2.update({
	    boton2:estado
	  });
	});
});
  /*****************************************************************
   Obtenemos el valor del último estado 
  ******************************************************************/
/*
  ref.once("value", function(res) {
    ///////valor de boton 
    var luzSala = res.child("boton").val();
    $('#switch').attr('checked', luzSala); // 
    console.log("Estado actual: " +luzSala)

  
    //////valor de boton2
  var luzSala2 = res.child("boton2").val();
    $('#switch2').attr('checked', luzSala2); // 
    console.log("Estado actual: " +luzSala2)
    });
    
  */

  /*****************************************************************
   Obtenemos el valor del estado de la luz en tiempo real, 
   cada vez que haya cambio
  ******************************************************************/
  /*
  ref.on("child_changed", function(res) {

    var luz_sala = res.val();
    $('#switch').prop('checked', luz_sala);
    console.log("Cambio de estado: " +luz_sala)
    

  });
  
    ref.on("child_changed", function(res) {

    var luz_sala2 = res.val();
    $('#switch2').prop('checked', luz_sala2);
    console.log("Cambio de estado: " +luz_sala2)
    

  });
*/
 /*****************************************************************
   Actualizamos el valor, cambiado el estado del Switch 
  ******************************************************************/
  /*
  $('#switch').on('change', function(){ 
     if(this.checked) 
      {
          console.log("On")
          ref.update({ boton: true });
      }
      else{
          console.log("Off")
          ref.update({ boton: false });
      }
    });
    
      $('#switch2').on('change', function(){ 
     if(this.checked) 
      {
          console.log("On")
          ref.update({ boton2: true });
      }
      else{
          console.log("Off")
          ref.update({ boton2: false });
      }
    });


});
*/
  
