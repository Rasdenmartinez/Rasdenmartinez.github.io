function Agent(x=0, y=0)
{
      THREE.Object3D.call(this);
      this.position.x =x;
      this.position.y =y;     
}

Environment.prototype.plan = function()
{
      for (var i=0; i<this.children.length; i++)
      {
            if(this.children[i].plan != undefined)
                this.children[i].plan(this);
      }
}
Environment.prototype.act = function()
{
      for (var i=0; i<this.children.length; i++)
      {
            if(this.children[i].act != undefined)
                this.children[i].act(this);
      }
}

function Wall(size, x, y)
{
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, size), new THREE.MeshNormalMaterial());
this.size=size;
this.position.x=x;
this.position.y=y;
}

Wall.prototype= new THREE.Mesh();

Environment.prototype.setMap= function(map)
{
  var_offst= Math.floor(map.lenght/2);
  
  for(var i=0;  i<map.length; i++)
  for(var j=0;  j<map.length; j++)
{
    if(map[i][j]=== 'x')
    this.add(new Wall(1, j - _offset, -(i - _offset)));
    else if(map[i][j]=== 'r')
    this.add(new Robot(1, j - _offset, -(i - _offset)));
}
      
}

Sensor.prototype=new THREE.Raycaster();

function Robot(size, x, y)
{
      Agent.call(this, x, y)
      this.sensor = new Sensor();
      this.actuador = new THREE.Mesh(new THREE.BNoxGeometru(size,size,size), new THREE.MeshBasixMaterial({color:'#aa0000'}));
      this.actuador.commands=[];
      this.add(this.actuador);
}


Robot.prototype = new Agent();

Robot.prototype.sense=function(environment)
{
      this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z), Math.sin(this.rotation.z), 0));
      var obstaculo = this.sensor.intersectObjects(environment.children,true);
      if(obstaculo.length>0 && (obstaculo[0].distance<= 0.5))
      this.sensor.colision=true;
      else
      this.sensor.colision=false;
            
}

         Robot.prototype.plan=function(environment)
      {
            this.actuator.comands = [];
            if (this.sensor.colision == true)
                  this.actuador.commands.push('rotateCCW');
            else 
                  this.actuador.commandspush('goStraight');
      };
      Robot.prototype.act = function(environment)
      {
            var command = this. actuator.commands.pop();
            if(command === undefined)
                  console.log('Undefined command');
            else if (command in this.operations)
                  this.operations[comand](this);
            else
                  console.log('Unknown command');
      };
      Robot.prototype.operations={};
      Robot.prototype.operations.goStraight=function(Robot,distance)
      {
            if (distance === undefined)
                  distance = 0.05;
            robot.position.x += distance*Math.cos(robot.rotation.z);
            robot.position.y += distance*Math.sin(robot.rotation.z);
      };
      Robot.prototype.operations.rotateCW=function(robot, angle)
      {
            if (angle === undefined)
            angle= -Math.PI/2;
            robot.rotation.z += angle;
            
      };
      
      Robot.prototype.operations.rotateCCW=function(robot, angle)
      {
            if (angle === undefined)
            angle= Math.PI/2;
            robot.rotation.z += angle;
            
      };
      
      
         
         
function setup()
{
  var mapa= new Array();
  mapa[0]="xxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1]="xxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[2]="            x            ";
  mapa[3]="            xxx          ";
  mapa[4]="               xxx       ";
  mapa[5]="         xxx             ";
  mapa[6]="          xxx            ";
  mapa[7]="              x          ";
  mapa[8]="             x           ";
  mapa[9]="            xx           ";
  mapa[10]="           xx            ";
  mapa[11]="             xxxxx       ";
  mapa[12]="   xx                    ";
  mapa[13]="     xx                  ";
  mapa[14]="       xx                ";
  mapa[15]="         xx              ";
  mapa[16]="           xx            ";
  mapa[17]="             xx          ";
  mapa[18]="               xxx       ";
  mapa[19]="                  xx      ";
  mapa[20]="                    xx    ";
  mapa[21]="                     x   ";
  mapa[22]="                      x  ";
  mapa[23]="                       x ";
  mapa[24]="                        x";

  environment = new Environment();
  environment.setMap(mapa);
  camera = new THREE.PerspectiveCamera();
  camera.position.z=30;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.ommeWidth*.95, window,innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  environm,ent.add(camera);
}
function loop()
{
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.render(environment, camara);
}

var environment, camera, renderer;

setup();
loop();
