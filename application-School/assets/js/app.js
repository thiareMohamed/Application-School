import {resuperationDonnees,saisiTextArea,carte}  from "./main.js"
// Declaration des variables
let donnees,apprenants = []
let idSave = JSON.parse(localStorage.getItem("id"))


if(localStorage.getItem("id") == null)
{
    idSave = 0
}
if(localStorage)
{
    CreerCarte();
}

// fonction Creer carte
function CreerCarte(){
    document.querySelector(".btnmodification").style.visibility = "hidden"
    let key = localStorage.length 
    for (let i = 0; i < key-1; i++)
    { 
        let apprenants = JSON.parse(localStorage.getItem(i));
        carte(apprenants);
    }
}


// recuperation des donnees du formulaire
document.querySelector('#form'),addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log();

    donnees = resuperationDonnees()
    carte(donnees)
    document.querySelector('#form').reset()
    apprenants.push(donnees)

    // localStorage
    localStorage.setItem(idSave,JSON.stringify(donnees))
    idSave++
    localStorage.setItem("id",idSave)
})

// Saisie TexteArea
const textArea = document.querySelector('.bio-form');
textArea.addEventListener('input',saisiTextArea)
