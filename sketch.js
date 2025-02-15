var bola, bola2;
var database;
var position;

function setup() {
  database = firebase.database();
  createCanvas(400, 400);
  bola = createSprite(200, 200, 10, 10);
  bola.shapeColor = "hotpink";
  bola2 = createSprite(100, 100, 10, 10);
  bola2.shapeColor = "lightskyblue";

  var bolapos = database.ref('bolaBia/position');
  bolapos.on("value", lerPos, mostrarErro);
  

  var bolaposJJ = database.ref('bolaJJ/position');
  bolaposJJ.on("value", lerPosJJ, mostrarErro2);
}

function draw() {
  background(0);

  if (position !== undefined){
    drawSprites();

    if (keyDown("up")){
      escreverPosBia(0,-3);
    }
    if (keyDown("down")){
      escreverPosBia(0,3);
    }
    if (keyDown("left")){
      escreverPosBia(-3,0);
    }
    if (keyDown("right")){
      escreverPosBia(3,0);
    }
    if (keyDown("w")){
      escreverJJ(0,-3);
    }
    if (keyDown("s")){
      escreverJJ(0,3);
      console.log("s");
    }
    if (keyDown("a")){
      escreverJJ(-3,0);
    }
    if (keyDown("d")){
      escreverJJ(3,0);
    }
  }
 
}
function escreverPosBia(x,y){
  database.ref('bolaBia/position').set({
    'x': position.x + x ,
    'y': position.y + y
  });
}
function lerPos(data){
  position = data.val();
  bola.x = position.x;
  bola.y = position.y;
}
function mostrarErro(){
  console.log("erro na conexão com a base de dados");
}
function escreverJJ(x,y){
  database.ref('bolaJJ/position').set({
    'x': position.x + x ,
    'y': position.y + y
  });
}
function lerPosJJ(data){
  position = data.val();
  bola2.x = position.x;
  bola2.y = position.y;
}
function mostrarErro2(){
  console.log("erro na conexão com a base de dados");
}
