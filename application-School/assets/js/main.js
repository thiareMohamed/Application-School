// Recuperation de donnees  
export function resuperationDonnees()
{
    const nom = document.querySelector(".nom").value
    const prenom = document.querySelector(".prenom").value
    const bio = document.querySelector(".bio").value
    const niveau = document.querySelector(".niveau").value
    const maquette = document.querySelector(".maquette").value
    const pageStatique = document.querySelector(".pageStatique").value
    const pageDynamique = document.querySelector(".pageDynamique").value
    const backEnd = document.querySelector(".backEnd").value

    let apprenant = {
        nom,
        prenom,
        bio,
        niveau,
        maquette,
        pageStatique,
        pageDynamique,
        backEnd
    }
    return apprenant
}

//  Evennement de textArea
export function saisiTextArea(e){
e.preventDefault();
    const textArea = document.querySelector('.bio-form');
    const nbrRestant = document.querySelector('.nbr-restant');
    const contenuRestant = document.querySelector('.contenu-restant');
    const longueurMax = 130
    let longueurSaisi = textArea.value
    nbrRestant.innerHTML = longueurMax - longueurSaisi.length

    if(nbrRestant.innerHTML > 16)
    {
        contenuRestant.style.color = "black"
        document.querySelector('#submit').disabled = false
    }
    
    if(nbrRestant.innerHTML <= 16)
    {
        contenuRestant.style.color = "yellow"
        document.querySelector('#submit').disabled = false

        if(nbrRestant.innerHTML <= 0)
        {
        contenuRestant.style.color = "red"
        document.querySelector('#submit').disabled = true
        }
    }
}  

// Creer carte
let id = 0
export function carte(apprenant){
    document.querySelector('.listeCarte').insertAdjacentHTML(
    "beforeend",
    `
            <div class="card-${id} mb-3">
                <img src="..." class="card-img-top" alt="...">

                <div class="card-body">
                    <div class="d-flex">
                        <h5 class="card-title mx-2">${apprenant.prenom}</h5>
                        <h5 class="card-title">${apprenant.nom}</h5>
                    </div>
                    <p class="card-text">${apprenant.bio}.</p>
                </div>

                <div class="card-footer d-flex justify-content-between">
                    <small class="text-muted">${apprenant.niveau}</small>
                    <div>
                        <button class="modification btn btn-success" id="${id}">Modifier</button>
                        <button class="suppression btn btn-danger" id="${id}">Supprimer</button>
                    </div>
                </div>

            </div>
    `
    )
    // Suppression
    let bouttonSupprimer = document.querySelectorAll(".suppression")
    for(let btnsup of bouttonSupprimer)
    {
        btnsup.addEventListener('click',()=>{
            supprimer(btnsup.id)  
        })
    }

    // Modification
    let bouttonModifier = document.querySelectorAll(".modification")
    for(let btnmodif of bouttonModifier)
    {
        btnmodif.addEventListener('click',()=>{
            modifier(btnmodif.id)  
        })
    }
    id++
}

// suppression
function supprimer(id)
{
    localStorage.removeItem(id);
    const carte = document.querySelector(`.card-${id}`)
    carte.remove()
}
// modification
function modifier(id)
{
    let classModifier = JSON.parse(localStorage.getItem(id))
    document.querySelector(".nom").value = classModifier.nom
    document.querySelector(".prenom").value = classModifier.prenom
    document.querySelector(".bio").value = classModifier.bio
    document.querySelector(".niveau").value = classModifier.niveau
    document.querySelector(".maquette").value = classModifier.maquette
    document.querySelector(".pageStatique").value = classModifier.pageStatique
    document.querySelector(".pageDynamique").value = classModifier.pageDynamique
    document.querySelector(".backEnd").value = classModifier.backEnd

    document.querySelector("#submit").style.visibility = "hidden"
    document.querySelector(".btnmodification").style.visibility = "visible"
    localStorage.removeItem(id);

    document.querySelector(".btnmodification").addEventListener('click',()=>{
        const carte = document.querySelector(`.card-${id}`)
        carte.remove()
        const nom = document.querySelector(".nom").value
        const prenom = document.querySelector(".prenom").value
        const bio = document.querySelector(".bio").value
        const niveau = document.querySelector(".niveau").value
        const maquette = document.querySelector(".maquette").value
        const pageStatique = document.querySelector(".pageStatique").value
        const pageDynamique = document.querySelector(".pageDynamique").value
        const backEnd = document.querySelector(".backEnd").value
    
        let apprenant = {
            nom,
            prenom,
            bio,
            niveau,
            maquette,
            pageStatique,
            pageDynamique,
            backEnd
        }
        localStorage.setItem(id,JSON.stringify(apprenant))
        document.querySelector("#submit").style.visibility = "visible"
        document.querySelector(".btnmodification").style.visibility = "hidden"
    })
}