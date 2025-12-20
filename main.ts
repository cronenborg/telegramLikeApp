//elenco membri di una classe e la loro età

let studente1: string = "Marco";
let eta1: number = 16;
let studente2: string = "Roberto";
let eta2: number = 17;
let studente3: string = "Luca";
let eta3: number = 18;
console.log(studente1,"ha",eta1);
console.log(studente2,"ha",eta2);
console.log(studente3,"ha",eta3);
let somma: number = eta1 + eta2;
console.log(somma);

let classe: [string, number][];
classe=[];

classe.push([studente1, eta1]);
classe.push([studente2, eta2]);

console.log(classe[0][0],"ha",classe[0][1],"anni");
console.log(classe[1][0],"ha",classe[1][1],"anni");

type Classe4AS = [string, number];

let studenteA: Classe4AS = ["Andrea",18];
let studenteB: Classe4AS = ["Ronaldo",17];

console.log("lo studente",studenteA[0],"ha",studenteA[1]);


type funzione = [string, number];

type somma = funzione[];

const eseguibile: somma = [
    ["+",6]
]
console.log(eseguibile[0][0])