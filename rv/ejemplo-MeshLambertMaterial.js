var forma = new THREE.SphereGeometry();
var material = new THREE.MeshLambertMaterial({color: '0#00cc00'});
var malla = new THREE.Mesh(forma, material);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;

var lienzo = document. getElementById("LambertMaterial");
var renderizador= new THREE. WebGLRenderer({canvas:lienzo, antialias:true});

renderizador.setsize(600,600);
renderizador.render(escena,camara);
