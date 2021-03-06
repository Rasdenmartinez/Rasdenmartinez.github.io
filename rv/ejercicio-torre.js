var torreForma = new THREE.CylinderBufferGeometry(5, 5, 20, 32);
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder = new THREE.Mesh( torreForma, material );

torre.translate(0,1,0);
var torreMalla = new THREE.Mesh(torreForma);
var edificio = new THREE.Geometry();

edifcio.merge(torres.geometry, torres.matrix);

var material = new THREE.MeshNormalMaterial();
var edificio = new THREE.Mesh(edificio, material);
var escena = new THREE.Scene();
escena.add(edificio);
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
