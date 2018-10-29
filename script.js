var tile = document.createElement("div");
Object.assign(tile.style,{"width" : "11.1%", "float" : "left", "padding-bottom" : "11.1%", "background-color" : "red"});
for(var i = 0; i<100; i++){
  if(i & 1){
    Object.assign(tile.style, {"background-color" : "black"});
  }
  else{
    Object.assign(tile.style, {"background-color" : "red"});
  }
  document.body.appendChild(tile.cloneNode(true));
}

function colorChange(){
  for(var i = 0; i < 100; i++){
  document.querySelectorAll("div")[i].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
  }
}
setInterval(colorChange, 2000);
