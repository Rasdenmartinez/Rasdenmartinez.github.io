
var TEXTURA =new Object();
TEXTURA.retrollamada = function(textura) 
{
  var material = new THREE.MeshBasicMaterial({map: textura});
  TEXTURA.malla= new Three.Mesh(new THREE.SphereGeometry(1), material);
  TEXTURA.escena.add(TEXTURA.malla);
 
}

TEXTURA.setup=function()
{
TEXTURA.escena=new THREE.Scene();
var cargador =new THREE.TextureLoader();
cargador.load("earth.jpg", TEXTURA.retrollamada);
TEXTURA.camara=new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeigth, 0.1, 1000);

