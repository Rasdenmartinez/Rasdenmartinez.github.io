var LuzPuntual = new THREE.PointLight(0xFFFFFF);
LuzPuntual.position.x=10;
LuzPuntual.position.y=10;
LuzPuntual.position.z=10;

var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color: "0#00cc00"});
var malla = new THREE.Mesh(forma, material);

var escena = new THREE.Scene();
escena.add(malla);
escena.add(LuzPuntual);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;

var lienzo = document.getElementById("LuzPuntual");
var renderizador= new THREE.WebGLRenderer({canvas:lienzo, antialias:true});

//renderizador.setSize(600,600);
//renderizador.render(escena,camara);

renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara)
