x = "";
y = "";
drawcircle = "";
drawRect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function setup(){
    canvas = createCanvas(900,500);
}
function start(){
    document.getElementById("status").innerHTML = "System has loaded please speak";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    content = content.toLowerCase();

    document.getElementById("status").innerHTML = "The Speech Recognised is"+ content;
    x = Math.floor(Math.random()*850);
    y = Math.floor(Math.random()*450);
    if (content == "circle"){
        document.getElementById("status").innerHTML = "circle is drawn";
        drawcircle = "set";
    }
    if (content == "rectangle"){
        document.getElementById("status").innerHTML = "rectangle is drawn";
        drawRect = "set";
    }
}
function draw(){
    if(drawcircle == "set"){
        radius = Math.floor(Math.random()*100);
        document.getElementById("status").innerHTML = "circle is drawn";
        circle(x,y,radius);
        drawcircle = "";
    }
    if(drawRect == "set"){
        document.getElementById("status").innerHTML = "rectangle is drawn";
        rect(x,y,70,50);
        drawRect= "";
    }
}
