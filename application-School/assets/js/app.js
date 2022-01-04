import {resuperationDonnees,saisiTextArea,carte}  from "./main.js"
import {enregistrer}  from "./supabase.js"

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
document.querySelector('#form .ajouter'),addEventListener('submit',(e)=>{
    e.preventDefault()
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

// Sauvegarder contenus
document.querySelector(".sauvegarder").addEventListener('click',()=>{
    if(localStorage.length == 0)
    {
        alert('Ajouter un apprenant')
        return
    }
    else
    {
        for(let i = 0; i <= localStorage.length - 2; i++)
        {
            enregistrer(localStorage[i])
        }
        
        const cartes = document.querySelector(".listeCarte");
        while (cartes.hasChildNodes()) {
            cartes.removeChild(cartes.firstChild);
        } 
        localStorage.clear()
        idSave = 0
    }
})

// Range competence
const maquette = document.querySelector('.maquette')
const statique = document.querySelector('.pageStatique')
const dynamique = document.querySelector('.pageDynamique')
const backEnd = document.querySelector('.backEnd')

maquette.addEventListener('input',()=>{
    document.querySelector('#mq').innerHTML = maquette.value
})
statique.addEventListener('input',()=>{
    document.querySelector('#ps').innerHTML = statique.value
})
dynamique.addEventListener('input',()=>{
    document.querySelector('#pd').innerHTML = dynamique.value
})
backEnd.addEventListener('input',()=>{
    document.querySelector('#be').innerHTML = backEnd.value
})