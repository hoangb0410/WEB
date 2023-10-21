var human = new Array(4);
human[0] = new Image();
human[0].src = "./images/jump0.gif";
human[1] = new Image();
human[1].src = "./images/jump1.gif";
human[2] = new Image();
human[2].src = "./images/jump2.gif";
human[3] = new Image();
human[3].src = "./images/jump3.gif";

var dir = "up";
var currentPos = 0;
function Jump() {
    if (dir == "up") {
        if (currentPos == 3) {
            --currentPos;
            dir = "down";
        } else {
            ++currentPos;
        }
    } else {
        if (currentPos == 0) {
            ++currentPos;
            dir = "up";
        } else {
            --currentPos;
        }
    }
    document.human.src = human[currentPos].src;
}

var jump;
function StartJump() {
    if (jump) {
        clearInterval(jump);
    }
    jump = setInterval("Jump()",200);
}