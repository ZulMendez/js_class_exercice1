// # Exo 1
// -  Créer une class Personne qui a comme propriétés: nom, prénom, age et taille.

class Personne {
    constructor(nom, prenom, age, taille) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.taille = taille;
        this.bonjour = () => {
            return `Bonjour je m'appelle ${this.nom}, ${this.prenom}; j'ai ${this.age} ans et je mesure ${this.taille}cm`
        }
    }
}
// -  Créer trois personnages avec des caractéristiques differentes.

let personnage1 = new Personne('Dupont', 'Marie', 25, '1.60');
let personnage2 = new Personne('Dubois', 'Elise', 27, '1.62');
let personnage3 = new Personne('Dupont', 'Emilie', 29, '1.65');

// -  Afficher une phrase pour chaque personnage qui affiche toutes ses caracteristiques.

console.log(`Bonjour, je m'appelle ${personnage1.nom}, ${personnage1.prenom}; j'ai ${personnage1.age} ans et je mesure ${personnage1.taille}cm`);
console.log(`Bonjour, je m'appelle ${personnage2.nom}, ${personnage2.prenom}; j'ai ${personnage2.age} ans et je mesure ${personnage2.taille}cm`);
console.log(`Bonjour, je m'appelle ${personnage3.nom}, ${personnage3.prenom}; j'ai ${personnage3.age} ans et je mesure ${personnage3.taille}cm`);

// # Exo 1.1
// -  Créer une methode dans la class Personne qui affiche toutes ses caracteristiques du personnage dans une phrase
console.log(personnage1.bonjour());
console.log(personnage2.bonjour());
console.log(personnage3.bonjour());
// # Exo 2
// -  Créer une class Personnage avec comme propriétés : 
// age , nom , ville
// Faire 2 instances de cette class.
class Personnage {
    constructor(age, nom, ville) {
        this.age = age;
        this.nom = nom;
        this.ville = ville;
    }
    sePresenter(){
        console.log(`Bonjour, je m'appelle ${this.nom}`);
    }
}
let personne1 = new Personnage(30, 'Richard', 'Anvers');
let personne2 = new Personnage(31, 'Marc', 'Bruxelles');
// # Exo 2.1
// - Rajouter la method sePresenter à la class Personnage qui console.log "Bonjour, je m'appelle [nom-de-la-personne] !"
// Lancer cette méthode sur les deux instances de l'exo2
console.log(personne1.sePresenter());
console.log(personne2.sePresenter());
// # Exo3
// - Traduire le code suivant en class et en instances
// - lieux
// let maison = {
//   nom: "maison",
//   contenu: [],
// };
// let epicerie = {
//   nom: "epicerie",
//   contenu: [],
//   ingredients: [],
// };
// let cuisine = {
//   nom: "cuisine",
//   contenu: [],
//   ingredients: [],
// };
class Lieux {
    constructor(nom, contenu, ingredients) {
        this.nom = nom;
        this.contenu = contenu;
        this.ingredients = ingredients;
    }
}

let maison = new Lieux('home', []);
let epicerie = new Lieux('epicerie', [], []);
let cuisine = new Lieux('cuisine', [], []);

console.log(epicerie);
// - ingredients
// let poivron = {
//   nom: 'poivron',
//   etat: 'entier',
//   prix:  1 ,
//  };
//  let oignon = {
//   nom: 'oignon',
//   etat: 'entier',
//   prix:  2 ,
//  };
//  let oeuf = {
//   nom: 'oeuf',
//   etat: 'entier',
//   prix:  4 ,
//  };
//  let epice = {
//   nom: 'epice',
//   etat: 'moulu',
//   prix:  3.25 ,
//  };
//  let paprika = {
//   nom: 'paprika',
//   etat: 'moulu',
//   prix:  1.5 ,
//  };
//  let fromage = {
//   nom: 'fromage',
//   etat: 'coupé',
//   prix:  1.6 ,
//  };
class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let poivron = new Ingredients('poivron', 'entier', 1);
let oignon = new Ingredients('oignon', 'entier', 2);
let oeufs = new Ingredients('oeufs', 'entier', 4);
let epice = new Ingredients('epice', 'moulu', 3.25);
let paprika = new Ingredients('paprika', 'moulu', 1.5);
let fromage = new Ingredients('fromage', 'coupé', 1.6);
// - Personne
// let personnage = {
//  nom: "Maxime",
//  lieu: "néant",
//  argent: 100,
//  panier: [],
//  se_deplacer(x){
//  },

//  payer(x){
//  },
//  couper(x,y){
//  }
// }
class Personne1 {
    constructor(nom, lieu, argent, panier) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.se_deplacer = (x) =>{

        }
        this.payer = (x) =>{
            
        }
        this.couper = (x, y) =>{
            
        }
    }
}
let personnageA = new Personne1('Maxime', 'néant', 100, [])
// # Exo4

// - Créer une class Objet

class Objet {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
        this.tableau = [];
    }
}
// _Propriétés : nom, prix
// - Créer deux instances d'objets avec un nom et un prix
let objet1 = new Objet('chaise', 150);
let objet2 = new Objet('table', 200);
// Créer une boite (tableau) et mettre les deux objets dedans.
let boite = [chaise, table]
// - Créer une class Personnage
// _Propriétés : nom(string), sac(tableau), argent(number)
// _Méthode : prendre(objet)
// _Méthode : acheter(vendeur, objet)

class Personne2 {
    constructor(nom, sac, argent) {
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        
    }
    prendre(){
        this.sac.push(objet);
        boite.splice(boite.indexOf(objet), 1)
    }
    acheter(){
        this.argent -= objet.prix
        vendeur.argent += objet.prix

        this.sac.push(objet)
        vendeur.sac.splice(vendeur.sac.indexOf(objet),1)
    }
}
// - Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// Ensuite faites acheter à l'un des deux, l'objet de l'autre.

let a = new Personne4('anne', [], 800);
let b = new Personne4('marie', [], 1000);


elias.prendre(bic)
max.acheter(anne, bic)

// console.log(anne);
// console.log(marie);
// console.log(boite);