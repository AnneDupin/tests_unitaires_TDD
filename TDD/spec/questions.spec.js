describe('Les chaînes de caractères : ', function () {
  //on décrit la fonctionnalité
  // "it" indique le comportement attendu
  it('Donner la taille d\'une chaîne de caractères', function () {
    // on crée un exemple
    var result = tailleString('Ce texte à une certaine taille');
    // donne le résultat attendu
    expect(result).toEqual(30);
  });

  it('Remplacer le premier e de la chaîne par un espace', function () {
    var result = replaceString('Ce texte à une certaine taille');
    // donne le résultat attendu
    expect(result).toContain('C texte à une certaine taille'); // toEqual marche aussi comme Matcher
  });


  it('Concatener deux chaînes de caractères', function () {
    // var result = concatString('Bonjour','Descodeuses');
    // expect(result).toContain('Bonjour Descodeuses');
    var result = concatString('Bonjour','Descodeuses');
    expect(result).toEqual('Bonjour Descodeuses');
  });
  

  it('Afficher le cinquième caractère d\'une chaîne', function () {
  let result = showChar('Zcouicouicouic');
  expect(result).toEqual('i');
  });


  it('Afficher les 9 premiers caractères d\une chaîne de caractère', function () {
  let result = showChar('Hello World !');
  expect(result).toMatch('Hello Wor');
  });
  


it('Mettre en majuscule la chaîne', function () {
let result = majString('Hello World !');
expect(result).toEqual('HELLO WORLD');
});


  it('Mettre en minuscule la chaîne', function () {
    let result = minString('HELLO WORLD !');
  expect(result).toEqual('hello world !');
  });
  
  it('Supprimer les espaces avant et après la chaîne', function () {
  let result = deleteSpace(' Bonjour le monde ');
  expect(result).toEqual('Bonjour le monde');
  });
  
  it('Afficher true si le paramêtre d\'entrée de la fonction est de type string', function () {
  let result = getBoolean('Suis-je une chaîne de caractères ?');
  expect(result).toBeTrue();
   });
  
   it('Afficher l\'extension du fichier', function () {
  let result = typeOfExtension('tdd.zip')
  expect(result).toEqual('jpg');
  });
  
  it('Compter le nombre d\'espace dans la chaîne', function () {
    let result = numberSpace(' Bonjour le monde ');
    expect(result).toEqual(3);
  });
  
  it('Inverser une chaîne de caractères', function () {
    let result = reverseString('Paris');
    expect(result).toEqual('siraP');
  });
})
