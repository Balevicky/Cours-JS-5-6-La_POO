//  les Objet en js est entre les {}
const obj = {
  // index:value
  pseudo: "Vicky",
  ville: "Bissau",
  // =========== ajouter une methode dans l'objet
  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },
  //   OU
  //   direBonjour() {
  //     console.log("Bonjour je suis " + this.pseudo);
  //   },
};
//======== Ajouter un element dans l'objet,
obj.age = 26;
// console.log(obj);
//======== Modifier un element dans l'objet,
obj.pseudo = "Vicky Amour";
obj["admin"] = true;
// console.log(obj);
//======== Supprimer un element dans l'objet,
delete obj.ville;
// console.log(obj);
//======== Checker si une propriété existedans dans l'objet,
// console.log("pseudo" in obj);
// console.log("ville" in obj);
//======== Parcourir l'objet qvec lq boucle For
for (const key in obj) {
  //   console.log(key);//  pour afficher l'index
  //   console.log(key + ": " + obj[key]); // pour afficher la valeur de l'index
}
// console.log(obj.direBonjour());
// ===================================
//  les METHODES NATIVES DE JS
// ===================================
// ================ Obtenir les clés
const key = Object.keys(obj);
// console.log(key);
// ================ Obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

// ================ decomposer chaque element de l'object en un tableau;
const nestedArray = Object.entries(obj);
// console.log(nestedArray);

// ================ fusionner les objects
const obj2 = {
  taille: "1m80",
  poids: "75kg",
  pseudo: "Goli",
};
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);
// ================ empecher  lesmodification dans  l'object
// const newObej = Object.freeze(obj);// empecher l'ajout etla modification
const newObej = Object.seal(obj); //empecher l'ajout et autoriser la modification
newObej.pseudo = "diego";
// obj.address = "Abidan";
newObej.address = "Abidan";
// console.log(obj);
// ======================
//  Construire des objets
// ======================

// ============ Founction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.grtCiy = function () {
    console.log("Je suis " + this.pseudo + " et j'habite à " + this.ville);
  };
}
const user1 = new User("Campbel", "Paris"); // user1 est un instance de User
const user2 = new User("Mesmet", "Abidjan");
// console.log(user1.grtCiy());

// ============ Factory function
function User3(pseudo, ville) {
  return {
    ville,
    pseudo,
  };
}
const user4 = User3("Balé", "Norverge");
// console.log(user4);

// ============ Class
class Utilisateur {
  constructor(pseudo, ville) {
    (this.pseudo = pseudo), (this.ville = ville);
  }
  // Mettre toues les Methodes
  sayMyName = function () {
    console.log("Je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("Sabine", "Yamoussoukro"); // user1 est un instance de Utilisateur
console.log(user5);
console.log(user5.sayMyName());

// ===== ajout de fonction prototypée
Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};
// ===== une autre façon d'ajout de fonction prototypée
Object.assign(Utilisateur.prototype, {
  method1() {
    // ma méthode
  },
  method2() {
    // ma méthode
  },
});
console.log(user5.sayCity());
// ======================
//  l'héritage
// ======================
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("le chien court !!");
  }
}
class Cat extends Animal {
  hurt() {
    console.log("J'ai tué un oiseau!!!");
  }
}
const rintintin = new Dog("rintintin", 9);
console.log(rintintin);
const mignon = new Cat("mignon", 3);
console.log(mignon);
