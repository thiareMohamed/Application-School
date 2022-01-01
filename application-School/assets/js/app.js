import {resuperationDonnees,saisiTextArea,carte}  from "./main.js"
// Declaration des variables
let donnees,apprenants = []
let idSave = JSON.parse(localStorage.getItem("id"))

// fonction Creer carte
function CreerCarte(){
    let key = localStorage.length 
    for (let i = 0; i < key-1; i++)
    { 
        let apprenants = JSON.parse(localStorage.getItem(i));
        carte(apprenants);
    }
}

if(localStorage)
{
    CreerCarte();
}
if(localStorage.getItem("id") == null)
{
    localStorage.setItem("id",0)
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
