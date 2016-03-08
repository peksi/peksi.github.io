/***
  Site functionality
***/

$('#portfolio-link').click(function () {
  $('#maincontainer').hide("fade", 400, function(){
    $('#portfoliocontainer').show("fade");
  });
});

$('#back-link').click(function () {
  $('#portfoliocontainer').hide("fade", 400, function(){
    $('#maincontainer').show("fade");
  });
});


/***
    Dat funky homepage animation,
    inspiration from:
    http://paperjs.org/tutorials/animation/creating-animations/
***/

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

/* onMouseMove */


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


// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "nJddQ.uQllb@QQuUY.cb"
  key = "XP1a2u3VpIJCqoR4WwKi96rQkSEmn0ZNAYf5ytBbgsOHdFLlGzjxe8c7vUMDhT"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }

  $('.mail').html("<a href='mailto:"+link+"'>"+link+"</a>");
}
