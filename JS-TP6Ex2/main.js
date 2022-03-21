function main() {

    let title = document.title;
    let d1 = document.querySelector('#tab');

    let text = document.createElement("p");
    text.innerHTML = "titre " + title;

    let line = document.createElement("p");
    line.innerText = "Nombre de ligne : " + (document.querySelector('#tab').querySelectorAll("tr").length - 1);

    let collum = document.createElement("p");
    collum.innerText = "Nombre de colonnes : " + (document.querySelector('#tab').querySelectorAll("td").length / (document.querySelector('#tab').querySelectorAll("tr").length - 1));

    let sem = document.createElement("p");
    sem.innerText = "Nombre de semestre : " + document.querySelector('#tab').querySelectorAll("td")[document.querySelector('#tab').querySelectorAll("td").length - 3].innerText.replace("S", "");

    let result = 0;
    let result2 = 0;
    for (let i = 0; i < document.querySelector('#tab').querySelectorAll("td").length; i++) {
        let v1 = document.querySelector('#tab').querySelectorAll("td")[i];
        let v2 = document.querySelector('#tab').querySelectorAll("td")[i + 1];
        if (v1.innerText == "S5" && v2.innerText == "E1") {

            document.querySelector('#tab').querySelectorAll("td")[i + 2].innerText = "14";
            document.querySelector('#tab').querySelectorAll("td")[i + 2].className = "spe";

            result = document.querySelector('#tab').querySelectorAll("td")[i + 2];
            result2 = document.querySelector('#tab').querySelectorAll("td")[i + 5];
        }
    }

    let note = document.createElement("p");
    note.innerText = "Note de E1 au S5 : " + result.innerText;

    let note2 = document.createElement("p");
    note2.innerText = "Note de E1 au S5 : " + result2.innerText;

    let br = document.createElement("br");
    let textA = document.createElement("textarea");


    d1.appendChild(text);
    text.appendChild(line);
    line.appendChild(collum);
    collum.appendChild(sem);
    sem.appendChild(note);
    note.appendChild(note2);
    note2.appendChild(br);
    note2.appendChild(textA);

}
main();