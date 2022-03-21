function main() {

    console.log("=========================================")
    console.log("Titre de la page : " + document.title);
    console.log("Type de contenu de la page : " + document)
    console.log("La troisieme bande annonce est : " + document.links[2]);
    console.log("=========================================")
    console.log("le titre GoneGirl est de type : " + document.getSelection("GONE GIRL"));
    console.log("=========================================")
    console.log("Notre page contient " + document.getElementsByTagName("p").length + " paragraphes et " + document.getElementsByTagName("img").length + " images.");
    console.log("=========================================");
    let r = 0;
    for (let i = 0; i < document.getElementsByClassName("synopsis").length; i++) {
        if (document.getElementsByClassName("synopsis")[i].getElementsByTagName("p")[0] != undefined) r++;
    }
    console.log("Notre page contient " + r + " synopsis.");
    console.log("=========================================")
    console.log("La première rubrique des films de l'année est " + document.getElementsByTagName("h1")[0].innerHTML);
    console.log("Il existe " + document.getElementById("a2016").getElementsByTagName("div").length / 2 + " films sous la rubrique 2016");
    console.log("=========================================")
    console.log("Synopsis du film : IMITATION GAME");
    console.log(document.getElementsByClassName("synopsis")[1].getElementsByTagName("p")[0].textContent)
    console.log("=========================================")
}
main();