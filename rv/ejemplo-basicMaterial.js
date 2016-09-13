var forma = new THREE.SphereGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var malla = new THREE.Mesh(forma, material);

var escena = new THREE.Scene();
escena.add(malla);

var escena = new THREE.PerspectiveCamera();
camara.position.z=5;

var lienzo = document. getElementById("basicMaterial");
var renderizador= new THREE. WebGLRenderer({canvas:lienzo,antialias:true});

renderizador.setsize(600,600);
renderizador.render(escena,camara);

<canvas id= "basic Material" width= "600" height="600"></canvas>
<script src= "ejemplo-basicMaterial.js"></script>
