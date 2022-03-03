// 2.1.1. Bonjour
let script1 = document.getElementById("script1");
script1.addEventListener('click', event => {
console.log("Bonjour monde");
});
/******************************************************************************/

// 2.1.2. Salut
let script2 = document.getElementById("script2");
script2.addEventListener('click', event => {
let prenom = prompt("Quel est ton prénom?")
console.log(`Bonjour, ${prenom} !`);
});
/******************************************************************************/

// 2.2.1. Calculs rapides
let script3 = document.getElementById("script3");
script3.addEventListener('click', event => {
var number = prompt("De quel nombre veux-tu calculer la factorielle?");
function fact(number) {
  if (number == 1) {
    return 1
  } else {
    return number * fact(number-1)
  }
}
console.log(fact(number))
});
/******************************************************************************/

// 2.2.2. Pyramide de Mario
let script4 = document.getElementById("script4");
script4.addEventListener('click', event => {
function pyramid(number){
  for (let n = number, i = 1 ; n !== 0; n--, i++) {
    console.log(' '.repeat(n) + '#'.repeat(i));
  }
}

let number = prompt('"Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ?"');
pyramid(number);
});
/******************************************************************************/

// 2.3.1 Startup Nation
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
let script5 = document.getElementById("script5");
script5.addEventListener('click', event => {
console.log("Liste des boss né dans les années 70:")
seventy = []
for (var i=0; i<(entrepreneurs.length); i++){
  annee = entrepreneurs[i].year
  if (annee > 1969 && annee < 1980) {
    seventy.push(entrepreneurs[i].first + " "+ entrepreneurs[i].last)
  }
};
console.log(seventy)
});

// Sors une array qui contient le prénom et le nom des entrepreneurs ;
let script6 = document.getElementById("script6");
script6.addEventListener('click', event => {
console.log("Prénom et nom des boss:")
array = []
for (var i=0; i<(entrepreneurs.length); i++){
    array.push(entrepreneurs[i].first + " "+ entrepreneurs[i].last)
};
console.log(array)
});

// Quel âge aurait chaque inventeur aujourd'hui ?
let script7 = document.getElementById("script7");
script7.addEventListener('click', event => {
console.log("Age des inventeur aujourd'hui:")
for (var i=0; i<(entrepreneurs.length); i++){
    age = 2022-entrepreneurs[i].year
    console.log(`${entrepreneurs[i].first + " " + entrepreneurs[i].first} aurait ${age}ans aujourd'hui.`)
};
});

// Trie les entrepreneurs par ordre alphabétique du nom de famille.
let script8 = document.getElementById("script8");
script8.addEventListener('click', event => {
function tri(a,b) {
  if (a.last < b.last){
    return -1;
  }
  if ( a.last > b.last ){
    return 1;
  }
  return 0;
};
console.log("Voici le tri par ordre alphabétique:")
console.log(entrepreneurs.sort(tri));
});

/******************************************************************************/

// 2.3.2. Bibliothécaire
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 18 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
let script9 = document.getElementById("script9");
script9.addEventListener('click', event => {
console.log("Est-ce que tout les livres ont été empruntés au moins une fois?")
//  const result = books.filter(pipou => {
//   return pipou.rented <= 0
// }); 
// if (result.length > 0)
//   console.log('false');
// else
//   console.log('true');
let isNotRented = true;
books.forEach(element => {
    if (element.rented <= 0)
      isNotRented = false;
});
console.log(isNotRented);
});

// Quel est livre le plus emprunté ?

// var MaxRented = [];            OPTION 1
// books.forEach(book => {
// 	MaxRented.push(book.rented)
// });
// RentedMax = Math.max(...MaxRented);
// let result = books.filter(book => book.rented == RentedMax);
// console.log(result);

// var MaxRented = [];            OPTION 2
// books.forEach(book => {
// 	MaxRented.push(book.rented)
// });
// RentedMax = Math.max(...MaxRented);
// books.forEach(book => {
//   if (book.rented === RentedMax) {
//     console.log(book.title)
//   }
// });
let script10 = document.getElementById("script10");
script10.addEventListener('click', event => {
const max = books.reduce((prev, current) => ( (prev.rented > current.rented) ? prev : current) , 0);
console.log(max.title)
});
// Quel est le livre le moins emprunté ?
let script11 = document.getElementById("script11");
script11.addEventListener('click', event => {
const min = books.reduce((prev, current) => ( (prev.rented < current.rented) ? prev : current) , 0);
console.log(min.title) 
});

