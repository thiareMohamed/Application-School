import {resuperationDonnees,saisiTextArea,carte}  from "./main.js"
import {Affichage,enregistrer}  from "./supabase.js"

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
        localStorage.clear()
        window.location.assign("../../liste-Apprenant.html")
    }

})