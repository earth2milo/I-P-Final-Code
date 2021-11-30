let ideas = ["Create a canvas with 4 strokes.", "Create a canvas entirely by smudging a household object with it.","Create a canvas by using leaves.","Only use one color to portray depth.","Quickly paint your portrait.", "Paint blind.", "Have someone describe their painting as you paint for them.", "Use only 3 colors to paint a landscape."," Bring a household object to life.","Draw the greatest accomplishment in your life.","Draw the last moment you cried.","Draw what friendship means to you.","Draw your most treasured memory.","Draw a perfect day.","Draw a last meal.","Draw the way you will die.","Draw the problem you are facing."];

let colors = ["#A42820","#5F5647","#98110E","3F5151","#4E2A1E","#550307","0C1707","FAD510","CB2314","273046","354823","1E1E1E1E"];

let randomIdea="";
let button;
let i;
let textfill;
let randomP= "";
function setup() {
createCanvas(windowWidth, windowHeight);
button = createButton("GENERATE IDEA");
intro = createP("In a creative block? Generate a warmup exercise!")
intro = intro.position(width/11, 200);
intro = intro.addClass("text");
textfill= createP(randomP);
textfill= textfill.position(width/150,height/1.7);
button= button.position(width/2, height/2);
button.addClass("button");
//background(floor(random(colors.length)));
button= button.mousePressed (buttonPressed);

  
  
}

function buttonPressed (){
randomNumber = Math.floor(random(ideas.length));
randomP=(ideas[randomNumber]);
textfill= textfill.html(randomP);
textfill = textfill.addClass("Name");
button.style("color");

  
  



}




