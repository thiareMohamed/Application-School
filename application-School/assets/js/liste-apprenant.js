import {Affichage}  from "./supabase.js"
const key_api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTEyMzgzNCwiZXhwIjoxOTU2Njk5ODM0fQ.CaY8LCXUQE8ZoArvqJTksbTYAk5JHSB30YtHYB1pMlM"
const url_api = "https://gpyxjxqhqhxkpmjjlruz.supabase.co/rest/v1/Apprenant"


    Affichage(ListeCarte)


function AffichageApprenant(carte,id)
{
    fetch(url_api + "?id=eq." + id,{
        method:"GET",
        headers:{
            apikey: key_api,
        },
    })
    .then((apprenant) => apprenant.json())
    .then((apprenant) => {
        // Afficher les donnees
        carte(apprenant[0])
        return
    })
}

// CARTE DE AAPPRENANTS
function ListeCarte(apprenant)
{
    document.querySelector('.liste-apprenant').insertAdjacentHTML(
        "beforeend",
        ` 
        <div class="col carte-${apprenant.id}" onclick="${AffichageApprenant(carteApprenant,apprenant.id)}">
            <div class="card h-100 carte-app" id="${apprenant.id}">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${apprenant.prenom + " " + apprenant.nom} </h5>
                    <p class="card-text">T${apprenant.bio}.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${apprenant.niveau}</small>
                </div>
            </div>  
        </div>
        `
        )
        

}


// CARTE APPRENANT
function carteApprenant(apprenant)
{
    document.querySelector('.liste-apprenant').insertAdjacentHTML(
        "beforeend",
        ` 
        <div class="card mb-3">
            <div class="card-header d-flex justify-content-between"> 
                <img src="/img/lou.jpg" class="card-img-top" alt="..." style="max-width: 300px;">
                <div>
                    <h5 class="card-title">${apprenant.nom +" "+ apprenant.prenom}</h5>
                    <p class="niveau">${apprenant.niveau}</p>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">${apprenant.bio}.</p>
                <div class="competences">
                    <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: ${apprenant.maquette}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Maquetter une application</div>
                    </div>
                    <div class="progress mb-3">
                        <div class="progress-bar bg-success" role="progressbar" style="width: ${apprenant.pageStatique}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Realisations d'une page statique</div>
                    </div>
                    <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style="width: ${apprenant.pageDynamique}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Realisations d'une page dynamique</div>
                    </div>
                    <div class="progress mb-3">
                        <div class="progress-bar bg-success" role="progressbar" style="width: ${apprenant.backEnd}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Developper une partie back-end</div>
                    </div>
                </div>
            </div>
        </div>
        `
        )
}