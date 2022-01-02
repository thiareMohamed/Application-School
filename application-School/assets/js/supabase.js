const key_api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTEyMzgzNCwiZXhwIjoxOTU2Njk5ODM0fQ.CaY8LCXUQE8ZoArvqJTksbTYAk5JHSB30YtHYB1pMlM"
const url_api = "https://gpyxjxqhqhxkpmjjlruz.supabase.co/rest/v1/Apprenant"

// Affichage
export function Affichage(carte)
{
    fetch("https://wcnhlgmpfqojryqbcxai.supabase.co/rest/v1/apprenantProvisoir",{
        method:"GET",
        headers:{
            apikey: key_api,
        },
    })
    .then((apprenants) => apprenants.json())
    .then((apprenants) => {
        // Afficher les donnees
        for (let apprenant of apprenants)
        {
            carte(apprenant)
        }
    })
}


// Enregistrement
export function enregistrer(donnees)
{
    fetch(url_api, {
        method: "POST",
        headers: {
          apikey: key_api,
          "Content-Type": "application/json",
        },
        body: donnees,
      });
      console.log("Bien enregistrer !");
}