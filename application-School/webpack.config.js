const path = require("path");

module.exports = {
  // Le fichier qui sert de point d'entrée et qui importe les différentes dépendances de l'application
  entry: "./assets/js/app.js",
  // Le dossier et nom du fichier qui sera généré par Webpack après le build
  // Webpack va donc intégrer l'ensemble des modules (dépendances) nécessaires dans un seul fichier dist/app.js
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};