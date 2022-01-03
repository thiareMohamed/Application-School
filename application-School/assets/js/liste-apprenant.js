import {Affichage}  from "./supabase.js"

Affichage(ListeCarte)
// CARTE DE AAPPRENANTS
function ListeCarte(apprenant)
{
    document.querySelector('.liste-apprenant').insertAdjacentHTML(
        "beforeend",
        ` 
        <div class="col carte-${apprenant.id}">
            <div class="card h-100 carte-app" id="${apprenant.id}">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${apprenant.prenom + " " + apprenant.nom} </h5>
                    <p class="card-text">T${apprenant.bio}.</p>
                    <p>
                        <button class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#carte-${apprenant.id}" aria-expanded="false" aria-controls="collapseExample">
                        Detail
                        </button>
                    </p>
                    <div class="collapse" id="carte-${apprenant.id}">
                        <div class="card card-body">
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
                <div class="card-footer">
                    <small class="text-muted">${apprenant.niveau}</small>
                </div>
            </div>
            
        </div>
        `
        )
}
