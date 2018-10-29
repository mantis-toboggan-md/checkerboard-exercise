var tile = document.createElement("div");
Object.assign(tile.style,{"width" : "11.1%", "float" : "left", "padding-bottom" : "11.1%"});
for(var i = 0; i<100; i++){
  if(i & 1){
    tile.style.backgroundColor = `rgb(${255-(i*2)}, 255, 0)`;
  }
  else{
    tile.style.backgroundColor = `rgb(255, 0, ${255-(i*2)})`;
  }
  document.body.appendChild(tile.cloneNode(true));
}
