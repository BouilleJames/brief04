document.body.onload=function(){
    nbr=4;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    for(i=1;i<=nbr;i++){
        document.getElementsByClassName('card');
        div=document.createElement("div");
        div.style.backgroundImage="url('image/img"+i+".jpg')";
    }
    afficherMasquer();
}
g.onclick=function() {
    if(p>-nbr+1)
        p--;
    container.style.transform="translate("+p*400+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
d.onclick=function() {
    if(p<0)
        p++;
    container.style.transform="translate("+p*400+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
function afficherMasquer(){
    if(p==-nbr+1)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";
     if(p==0)
        d.style.visibility="hidden";
     else
        d.style.visibility="visible";
}

// let cards = document.querySelectorAll('card');
// cards.forEach(card => {
//     card.style.margin-right == "10%";
//   });
// function stopCarrousel() {
//     // Récupération de l'élément HTML représentant le dernier élément visible dans le slider
// const lastVisibleElement = document.querySelector('#container .card:last-of-type');

// // Ajout d'un gestionnaire d'événements sur cet élément
// lastVisibleElement.addEventListener('click', (event) => {
//   // Empêcher le comportement par défaut (ici, le clic) sur l'élément
//   event.preventDefault();
// });

// }


// HTML
/* <button id="myButton">Cliquez ici</button> */

// JavaScript
// const myButton = document.getElementById("myButton");
// const popup = document.createElement("div");
// popup.innerHTML = "Ceci est une description";
// popup.style.display = "none";
// popup.style.position = "absolute";
// popup.style.top = "50px";
// popup.style.left = "50px";
// popup.style.padding = "10px";
// popup.style.backgroundColor = "#fff";
// popup.style.border = "1px solid #000";
// popup.style.zIndex = "999";

// document.body.appendChild(popup);

// myButton.addEventListener("mouseover", () => {
//   popup.style.display = "block";
// });

// myButton.addEventListener("mouseout", () => {
//   popup.style.display = "none";
// });

// Dans cet exemple, nous avons créé un bouton avec l'ID myButton.
//  Nous avons également créé une div qui contiendra notre
//   popup de description. Nous avons ajouté du contenu à la div en
//    utilisant la propriété innerHTML. Nous avons ensuite défini les 
//    styles CSS pour la div en utilisant les propriétés de style
//     JavaScript.


// Nous avons ensuite ajouté la div au corps du document en utilisant
//  la méthode appendChild. Enfin, nous avons ajouté des 
//  écouteurs d'événements pour le survol de la souris sur le bouton.
//   Lorsque la souris survole le bouton, la popup est affichée.
//    Lorsque la souris quitte le bouton, la popup est masquée.