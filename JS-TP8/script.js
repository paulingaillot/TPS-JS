function clic() {
    let button = document.getElementById("but");
    button.style.backgroundColor = "RGB("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"
}

function print(event) {
    let x = event.clientX;
    let y = event.clientY;
    console.log("Location : x="+x+" y="+y)
    let button = document.getElementById("but");
    button.style.backgroundColor = "RGB("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"
}

function main() {

    let button = document.getElementById("but");
    button.onclick = clic;
    button.onmousemove = print;


}
main();