function keyboardev(event) {

    let touche = document.getElementById("key-"+event.key);
    touche.className = "key pressed";

}

function keyboardown(event) {

    let touche = document.getElementById("key-"+event.key);
    touche.className = "key released";
}

function main(){

    addEventListener("keypress", keyboardev);
    addEventListener("keyup", keyboardown);
}


main();