import {resuperationDonnees,saisiTextArea,carte}  from "./main.js"
// Declaration des variables
let donnees,apprenants = []
let idSave = 0

// recuperation des donnees du formulaire
document.querySelector('#form'),addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log();

    donnees = resuperationDonnees()
    carte(donnees)
    document.querySelector('#form').reset()
    apprenants.push(donnees)
    // localStorage
    // apprenantsLocal = localStorage;
    localStorage.setItem(idSave,JSON.stringify(donnees))
    idSave++
        console.log(apprenants);
})

// Saisie TexteArea
const textArea = document.querySelector('.bio-form');
textArea.addEventListener('input',saisiTextArea)
