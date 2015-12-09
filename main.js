/*  
    inspiration from:
    http://paperjs.org/tutorials/animation/creating-animations/
*/

var count = 100;
var pause = false;
var colors = ['#F1AD88', '#EF7966', '#703F4D', '#3B2A3E']; // http://adobe.ly/1skGfUO

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* Generate one triangle */

function tri(index){
    var triangle = new Path.RegularPolygon(new Point(0, 0), 3, 50);
    triangle.fillColor = colors[index];  
    return triangle;  
}

/* Place all the triangles */

for (var i = 0; i < count; i++) {
    var symbol = new Symbol(tri(getRandomInt(0,4)));
    var position = Point.random() * view.size;
    var placedSymbol = symbol.place(position);
    placedSymbol.scale(i / count);
}

/* Run the effect */

function onFrame(event) {
    if(!pause){
        for (var i = 0; i < count; i++){
            var item = project.activeLayer.children[i];
            // Speed 
            item.position.y -= item.bounds.width / 100;
            // Loop
            if (item.bounds.bottom < 0) {
                item.position.y = view.bounds.height + item.bounds.height;
            }        
        }
    }
}

/* Stop this madness with spacebar */

function onKeyDown(event){
    if(event.key == 'space'){
        pause = !pause;
    }
}
