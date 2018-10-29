var tile = document.createElement("div");
Object.assign(tile.style,{"width" : "11.1%", "float" : "left", "padding-bottom" : "11.1%"});
for(var i = 0; i<100; i++){
  tile.style.backgroundColor =  `rgb(${Math.random() * 220}, ${Math.random() * 220}, ${Math.random() * 220})`;
  document.body.appendChild(tile.cloneNode(true));
}
