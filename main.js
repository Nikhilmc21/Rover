var background_image = "mars.jpg";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_image = "rover.png";
var rx = "";
var ry = "";
var rw = "";
var rh = "";
background_imgTag = "";
rover_imgTag = "";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rx, ry, rw, rh);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}
function up()
{
    if (ry>=0)
    {
        ry-=10;
uploadBackground();
uploadrover();
    }
}
    function down()
    {
        if (ry<=500)
        {
            ry+=10;
            uploadBackground();
            uploadrover(); 
        }
    }
    function left()
    {
            if (rx>=0)
            {
                rx-=10;
                uploadBackground();
                uploadrover(); 
            }       
    }
            function right()
            {
                if (rx<=700)
                {
                    rx+=10;
                    uploadBackground();
                    uploadrover(); 
                }
            }