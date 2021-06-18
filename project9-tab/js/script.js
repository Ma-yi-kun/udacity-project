
var el = document.querySelectorAll("li");

var themeList=[];

for(var i=0; i<el.length;i++){
  themeList.push(el[i].getAttribute("data-color"));
  themeList.push(el[i].getAttribute("data-image"));

var clk=  el[i].addEventListener("click",function(){
   var img=$(this).attr("data-image");
   $("body").css("backgroundImage","url(./"+img+")");
   $("body").css("backgroundSize","100% 100%");

   var clr=$(this).css("color");
   $("h1").css("color",clr);

   localStorage.setItem("changeColor",JSON.stringify(this.getAttribute("data-color")));
   localStorage.setItem("changeImage",JSON.stringify(this.getAttribute("data-image")));

   console.log(localStorage.getItem("changeColor"));
   console.log(localStorage.getItem("changeImage"));


  },false)
}






var mem = {
  /* [INITIALIZE] */
  grid: [], // current play grid
  total : 6, // total number of smiley pairs to match
  init: function () {
    // init() : initialize the game

    // (1) ARRAY OF AVAILABLE SMILIES
    mem.grid = [];
    for (var i=1; i<=mem.total; i++) {
      mem.grid.push(i);
      mem.grid.push(i);
    }

    // (2) RANDOMLY SHUFFLE THE SMILIES
    // Credits : https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
    var currentIndex = mem.grid.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = mem.grid[currentIndex];
      mem.grid[currentIndex] = mem.grid[randomIndex];
      mem.grid[randomIndex] = temporaryValue;
    }

    // (3) RESET THE SCORES
    mem.remain = mem.total;
    mem.moves = 0;
    mem.mistakes = 0;
    mem.first = null;
    mem.second = null;mem.gir
    if (mem.timer != null) {
      clearTimeout(mem.timer);
      mem.timer = null;
    }

    // (4) DRAW HTML GRID
    var container = document.getElementById("mem-play"),
        card = null;
    container.innerHTML = "";
    for (var i=0; i<mem.grid.length; i++) {
      card = document.createElement("div");
      card.innerHTML = "<img src='smiley-0.png'/>";
      card.classList.add("mem-card");
      card.setAttribute("id", "mem-card-" + i);
      card.dataset.idx = i;
      card.addEventListener("click", mem.play);
      container.appendChild(card);
    }

    // (X) CHEAT - SEE THE SHUFFLED CARDS
    // console.log(mem.grid);
  },

  /* [PLAY] */
  remain : 0, // number of pairs remaining
  moves : 0, // total number of moves
  mistakes : 0, // total number of mismatches
  first : null, // first opened card
  second : null, // second opened card

  // After showing 2 wrong cards, there will be a short delay before flipping back
  show : 1000, // time to show wrong cards, in micro seconds
  timer : null, // timer to flip back
  play : function () {
  // play() : when a card is selected

    // (1) CHECKS - "SAFETY LOCK"
    // Will proceed only when not showing wrong cards
    // Will proceed only if selected card is different
    if (mem.second === null) { if (this.dataset.idx != mem.first) {
      // (2) "SAVE" THE SELECTED CARD
      if (mem.first === null) { mem.first = this.dataset.idx; }
      else { mem.second = this.dataset.idx; }

      // (3) FLIP OPEN & SHOW SMILEY
      this.classList.add("open");
      this.innerHTML = "<img src='smiley-" + mem.grid[this.dataset.idx] + ".png'/>";

      // (4) MATCH CARDS WHEN 2 ARE SELECTED + UPDATE STATS
      mem.moves++;
      if (mem.first!==null && mem.second!==null) {
        if (mem.grid[mem.first] == mem.grid[mem.second]) {
          // (4A) MATCHED
          mem.update(true);
          mem.remain--;

          // (4B) WIN - ALL MATCHED
          if (mem.remain==0) {
            alert("WIN! Moves - " + mem.moves + " Mistakes - " + mem.mistakes);
          }
        } else {
          // (4C) MISMATCH
          mem.timer = setTimeout(mem.update, mem.show);
          mem.mistakes++;
        }
      }
    }}
  },

  update : function (ok) {
  // update() : flip the cards back and hide?
  // PARAM ok : true for cards matched, false (or undefined) for mismatch

    // (5) FIRST CARD
    var card = document.getElementById("mem-card-" + mem.first);
    card.classList.remove("open");
    if (ok) {
      card.classList.add("ok");
    } else {
      card.innerHTML = "<img src='smiley-0.png'/>";
      card.addEventListener("click", mem.play);
    }

    // (6) SECOND CARD
    card = document.getElementById("mem-card-" + mem.second);
    card.classList.remove("open");
    if (ok) {
      card.classList.add("ok");
    } else {
      card.innerHTML = "<img src='smiley-0.png'/>";
      card.addEventListener("click", mem.play);
    }

    // (7) RESET SELECTIONS
    mem.first = null;
    mem.second = null;
    mem.timer = null;
  }
};

/* [START ON WINDOW LOAD] */
window.addEventListener("load", mem.init);

function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}

















var ds=document.getElementsByClassName('game-block')[0].getAttribute("data-info");
ds.replace(".me","#owl");
$(".game-block").click(function(){
  $("audio").get(0).play();
})
var bs=document.getElementsByClassName('game-block')[0].getAttribute("data-info");
var ms=Math.round(Math.random(bs));
var wdo=window.innerWidth;
var tms=ms*wdo;
console.log(tms);
console.log(wdo);
  console.log(ms);


var dv=window.document.getElementsByTagName('ul');
var ds=document.getElementsByClassName('game-block')[0].getAttribute("data-info");
$(this).click(function(){

  console.log("dncwnekie");
})
console.log(ds);
console.log(dv);

var gme=document.getElementsByClassName('game-block');

// console.log(gme.substring(0,gme.lastIndexOf('@')));
//console.log(gme.substr(1,gme.indexOf('M')));





$(document).keyup(function(e){
if(e.keycode==32){
  console.log("wjcjwscjwsbc");
}else{
  console.log("jwnjbcj");
}



var ds=document.getElementsByClassName('game-block')[0].getAttribute("data-info");
var str=$(ds).attr('src','"+this.src+"');
console.log(str);
$(this).css("transform","rotateY(180deg)");

var fc=document.getElementsByClassName('front');
var ths=$(this).attr('src','+"this.src"+');
console.log(ths);
  fc[1].src="img-250.jpg";
  fc[1].style.backgroundColor="transparent";
  fc[1].innerHTML="";
console.log(fc.length);
})


























/*
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element.




Use the following methods to create new nodes:
element.cloneNode() clones an element and returns the resulting node.
document.createElement(element) creates a new element node.
document.createTextNode(text) creates a new text node.

For example:
var node = document.createTextNode("Some new text");

This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods:
element.appendChild(newNode) adds a new child node to an element as the last child node.
element.insertBefore(node1, node2) inserts node1 as a child before node2.




var p = document.createElement("p");
 var node = document.createTextNode("Some new text");
 //adding the text to the paragraph
 p.appendChild(node);

 var div = document.getElementById("demo");
 //adding the paragraph to the div
 div.appendChild(p);






 To remove an HTML element, you must select the parent of the element and use the removeChild(node) method.


 An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the element we want to remove:
var child = document.getElementById("p1");
child.parentNode.removeChild(child);


To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used.


// starting position
var pos = 0;
//our box element
var box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos+"px"; //px = pixels
}


The following code defines a timer that calls the move() function every 10 milliseconds:
var t = setInterval(move, 10);

However, this makes our box move to the right forever. To stop the animation when the box reaches the end of the container, we add a simple check to the move() function and use the clearInterval() method to stop the timer.
function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}

When the left attribute of the box reaches the value of 150, the box reaches the end of the container, based on a container width of 200 and a box width of 50.
The final code:
var pos = 0;
//our box element
var box = document.getElementById("box");
var t = setInterval(move, 10);

function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
*/
