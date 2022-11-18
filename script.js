//----- paragraphes ----------

let p = document.querySelectorAll("p");
console.log(p);

for (let i = 0; i < p.length; ++i){
    p.item(i).style.color = "darkgreen";
    p.item(i).style.width = "50%";
}

// ---- animation-p --

let fP = document.querySelector("p");
console.log(fP);

    fP.style.animation = 'color';
    fP.style.animationName = 'cColor';
    fP.style.animationDuration = '10s';
    fP.style.animationIterationCount = 'ease';

// ------- last-p ---------

let lastP = document.querySelector('p:nth-child(5)');
console.log(lastP);

    lastP.innerHTML = "Je suis désormais un nouveau texte ! La classe !";

// ----------- span -------------

let spanT = document.getElementsByClassName('spanTest');
console.log(spanT);

for (let bg = 0; bg < spanT.length; ++bg){
    spanT.item(bg).style.backgroundColor = "palegreen";
    spanT.item(bg).dir = 'rtl'; // et surtout pas la radio hein...
}

// --------- liens ---------------

let aText = document.getElementsByTagName("a");
console.log(aText);

for (let txt = 0; txt < aText.length; ++txt){
    aText.item(txt).innerText = "Bonjour";
    aText.item(txt).href = "https://Google.fr/";
}

