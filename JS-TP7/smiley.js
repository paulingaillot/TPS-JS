function canvasApp() {
    let canvas = document.getElementById("smiley");
    let context = canvas.getContext("2d");

    return context;
}

function displayDateTime() {

    let date = new Date();
    let day = date.getDay();
    let res = "";
    if (day == 1) res = res + "Lundi";
    if (day == 2) res = res + "Mardi";
    if (day == 3) res = res + "Mercredi";
    if (day == 4) res = res + "Jeudi";
    if (day == 5) res = res + "Vendredi";
    if (day == 6) res = res + "Samedi";
    if (day == 7) res = res + "Dimanche";

    res = res + " " + date.getUTCDate();
    let month = date.getMonth();

    if (month == 0) res = res + " Janvier";
    if (month == 1) res = res + " Fevrier";
    if (month == 2) res = res + " Mars";
    if (month == 3) res = res + " Avril";
    if (month == 4) res = res + " Mai";
    if (month == 5) res = res + " Juin";
    if (month == 6) res = res + " Juillet";
    if (month == 7) res = res + " Aout";
    if (month == 8) res = res + " Septembre";
    if (month == 9) res = res + " Octobre";
    if (month == 10) res = res + " Novembre";
    if (month == 11) res = res + " Decembre";

    res = res + " " + " " + date.getFullYear();

    let res2 = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    let dayval = document.getElementById("day");
    dayval.innerText = "Nous somme le " + res;

    let hourval = document.getElementById("heure");
    hourval.innerText = "Il est actuelement " + res2;

    let res3 = 60;
    let resteval = document.getElementById("reste");
    resteval.innerText = "Le dessin va s'afficher dans " + res3;
    let test22 = setInterval(function testing() {
        res3--;
        resteval.innerText = "Le dessin va s'afficher dans " + res3;

    }, 1000);
    setTimeout(function () {
        clearInterval(test22);
        resteval.innerText = "Le dessin est affiché ci-dessous";
        canvasApp2();
    }, 60000);


}

function canvasApp2() {
    let context = canvasApp();

    context.beginPath();
    context.arc(100, 100, 75, 0, 2 * Math.PI);
    context.lineWidth = 3;
    context.fillStyle = "yellow";
    context.fill();
    context.stroke();

    context.fillStyle = "black";

    context.beginPath();
    context.arc(65, 70, 10, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(135, 70, 10, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(99, 120, 35, 0, Math.PI);
    context.lineWidth = 6;
    context.stroke();

    //drawCross(context);
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.font = "italic 20px times";
    context.fillText("Hello Canvas", 100, 200);
}

function main() {


    displayDateTime();


}
main();