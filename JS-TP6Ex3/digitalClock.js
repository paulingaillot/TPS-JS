function addSegments(digitId) {

    let seg0 = document.createElement("div");
    seg0.className = "segment segment0 off";

    let seg1 = document.createElement("div");
    seg1.className = "segment segment1 off";

    let seg2 = document.createElement("div");
    seg2.className = "segment segment2 off";

    let seg3 = document.createElement("div");
    seg3.className = "segment segment3 off";

    let seg4 = document.createElement("div");
    seg4.className = "segment segment4 off";

    let seg5 = document.createElement("div");
    seg5.className = "segment segment5 off";

    let seg6 = document.createElement("div");
    seg6.className = "segment segment6 off";

    digitId.appendChild(seg0);
    digitId.appendChild(seg1);
    digitId.appendChild(seg2);
    digitId.appendChild(seg3);
    digitId.appendChild(seg4);
    digitId.appendChild(seg5);
    digitId.appendChild(seg6);

}

function updateDigit(digitId, value) {

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];



    for (let i = 0; i < 7; i++) {
        if (segmentStates[value][i] == 1) document.querySelector("#" + digitId).querySelector(".segment" + i).className = "segment segment" + i;
        else document.querySelector("#" + digitId).querySelector(".segment" + i).className = "segment segment" + i + " off";
    }
}




function init() {

    addSegments(document.querySelector("#hours-tens"));
    addSegments(document.querySelector("#hours-units"));
    addSegments(document.querySelector("#minutes-tens"));
    addSegments(document.querySelector("#minutes-units"));
    addSegments(document.querySelector("#seconds-tens"));
    addSegments(document.querySelector("#seconds-units"));
}



function main() {

    init();

    setInterval(function() {

        let fin = new Date();
        let number = fin.getTime();

        let year = 1970;
        while (number > 8.64e+7) {
            number = number - 8.64e+7;
        }

        let heure = 0;
        while (number > 3.6e+6) {
            heure++;
            number = number - 3.6e+6;
        }
        

        let min = 0;
        while (number > 60000) {
            min++;
            number = number - 60000;
        }
        number = number /1000;

        let number1 = parseInt(heure / 10);
        let number2 = parseInt(heure % 10) + 2;
        let number3 = parseInt(min / 10);
        let number4 = parseInt(min % 10);
        let number5 = parseInt(number/10);
        let number6 = parseInt(number%10);

        console.log(number5);

        updateDigit("hours-tens", number1);
        updateDigit("hours-units", number2);
        updateDigit("minutes-tens", number3);
        updateDigit("minutes-units", number4);
        updateDigit("seconds-tens", number5);
        updateDigit("seconds-units", number6);
        // TODO : compléter

    }, 1000);



}


main();