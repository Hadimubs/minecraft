canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;

var playerObject="";
var blockObject="";

function PI(){
fabric.Image.fromURL("player.png",function(img){
playerObject=img;
playerObject.scaleToWidth(150);
playerObject.scaleToHeight(150);
playerObject.set({
top:player_y,
left:player_x
});
canvas.add(playerObject);
});
}

function BI(get_image){
    fabric.Image.fromURL(get_image,function(img){
    blockObject=img;
    blockObject.scaleToWidth(block_width);
    blockObject.scaleToHeight(block_height);
    blockObject.set({
    top:player_y,
    left:player_x
    });
    canvas.add(blockObject);
    });
    }
    window.addEventListener("keydown",myKeydown);
    function myKeydown(e){
    keypress=e.keyCode
console.log(keypress);
if (e.shiftKey==true && keypress=='80') {
  block_width=block_width+10;
  block_height=block_height+10;  
  document.getElementById("w").innerHTML=block_width;
  document.getElementById("h").innerHTML=block_height;
}

if (e.shiftKey==true && keypress=='77') {
 block_width=block_width-10;
 block_height=block_height-10;
 document.getElementById("w").innerHTML=block_width;
 document.getElementById("h").innerHTML=block_height;
}
if (keypress=='37') {
  console.log("left");
  left();
}
if (keypress=='38') {
 console.log("up");
 up();
}
if (keypress=='39') {
  console.log("right");
  right();
}
if (keypress=='40') {
    console.log("down");
    down();
}
if (keypress=='87') {
   BI('wall.jpg');
}
if (keypress=='71') {
    BI('ground.png');
 }
 if (keypress=='76') {
    BI('light_green.png');
 }
 if (keypress=='84') {
    BI('trunk.jpg');
 }
 if (keypress=='82') {
    BI('roof.jpg');
 }
 if (keypress=='89') {
    BI('yellow_wall.png');
 }
 if (keypress=='68') {
    BI('dark_green.png');
 }
 if (keypress=='85') {
    BI('unique.png');
 }
 if (keypress=='67') {
    BI('cloud.jpg');
 }
    }

function up(){
if (player_y>0) {
  player_y=player_y-block_height;
  canvas.remove(playerObject);
  PI();
}
}

function down(){
    if (player_y<=500) {
   player_y=player_y+block_height;
   canvas.remove(playerObject);
   PI();     
    }
}

function left(){
if (player_x>0) {
player_x=player_x-block_width;
canvas.remove(playerObject);
PI();   
}
}

function right(){
if (player_x<=800) {
 player_x=player_x+block_width;
 canvas.remove(playerObject);
 PI();
}
}