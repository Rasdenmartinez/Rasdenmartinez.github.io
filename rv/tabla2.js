	// grid

				var size = 500, step = 50;

				var geometry = new THREE.BoxGeometry();

				for ( var i = - size; i <= size; i += step ) {

					geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
					geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

					geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
					geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

				}

				var material = new THREE.LineBasicMaterial( { color: 0x888888, opacity: 0.2, transparent: false } );

				var line = new THREE.LineSegments( geometry, material );
				malla.rotateY(Math.PI/4);
				
				var escena = new THREE.Scene();
				escena.add( line );
				
var camara = new THREE.PerspectiveCamera();
camara.position.y = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara)
