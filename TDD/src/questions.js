/*
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieurs façon de faire.
 */

// Donner la taille de la chaîne de caractères.
let tailleString = function (texte) {

    return texte.length;
}

//Remplacer le premier e de la chaîne par un espace
var replaceString = function (texte) {
    // var result = texte.replace('e', ' ');
    return texte.replace('e', ' ');
}

// Concatener les deux chaînes de caractères
// var concatString = function (text1, text2) {
// return text1 + ' ' + text2;
var concatString = function (texte) {
    return texte.concat(' Descodeuses');
    return result;
}

// Correction :
var showChar = function (texte) {
    var result = texte.charAt(4);
    return result;
}

// Afficher 9 premiers charactères
var ShowChar9 = function(texte) {
    var result = texte.substr(0, 9);
    return result;
}

// Mettre en majuscule la chaîne
var majString = function(texte) {
    return texte.toUpperCase(); // Upper marche aussi
}

// Mettre en minuscule la chaîne
var minString = function(texte) {
    var result = texte.toLowerCase();
    return result;
}

// Supprimer les espaces avant et après la chaîne
let deleteSpace = function(texte) {
    return texte.trim();
}

// Afficher true si le paramêtre d\'entrée de la fonction est de type string
let getBoolean = function(texte) {
    if(typeof texte === 'string') {
        return true;
    }
}

// Afficher l\'extension du fichier
let typeOfExtension = function(string){
return string.split('.').pop();
}


// Compter le nombre d\'espace dans la chaîne
let numberSpace = function(string){
    let result = string.split(' ').length -1; // parce que le lenght commence par 0
    return result; 
}

// Inverser une chaine de caractères
let reverseString = function(string){
    let result = string.split('').reverse().join();
    return result;
}