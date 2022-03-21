function top1() {
    let img = document.getElementById("img2");
    img.style.backgroundPosition = "top";
}

function left1() {
    let img = document.getElementById("img2");
    img.style.backgroundPosition = "left";
}

function right1() {
    let img = document.getElementById("img2");
    img.style.backgroundPosition = "right";
}

function bot1() {
    let img = document.getElementById("img2");
    img.style.backgroundPosition = "bottom";
}

function popon1() {
    window.open("./exo3.html");
}

function popcl1() {
    window.close();
}

function main() {

    let popon = document.getElementById("popon");
    popon.onclick = popon1;

    let popcl = document.getElementById("popcl");
    popcl.onclick = popcl1;

    let top = document.getElementById("top");
    top.onclick = top1;
    let left = document.getElementById("left");
    left.onclick = left1;
    let right = document.getElementById("right");
    right.onclick = right1;
    let bot = document.getElementById("bottom");
    bot.onclick = bot1;


}
main();