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
                <img src="./assets/img/profil.png" style="width: 150px;" class=" p-2 card-img-top" alt="...">
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
                            <label for="customRange2" class="form-label">Maquetter Application</label>
                            <div class="progress mb-3">
                                <div class="progress-bar" role="progressbar" style="width: ${apprenant.maquette}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${apprenant.maquette}%</div>
                            </div>
                            <label for="customRange2" class="form-label">Realisations d'une page statique</label>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-success" role="progressbar" style="width: ${apprenant.pageStatique}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${apprenant.pageStatique}%</div>
                            </div>
                            <label for="customRange2" class="form-label">Realisations d'une page dynamique</label>
                            <div class="progress mb-3">
                                <div class="progress-bar" role="progressbar" style="width: ${apprenant.pageDynamique}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${apprenant.pageDynamique}%</div>
                            </div>
                            <label for="customRange2" class="form-label">Developper une partie back-end</label>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-success" role="progressbar" style="width: ${apprenant.backEnd}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${apprenant.backEnd}%;</div>
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
