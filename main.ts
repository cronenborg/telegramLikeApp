type metadati1A = [string, number];

let studenteA: string = "Roberto";
let etaA: number = 18;
let studenteB: string = "Marco";
let etaB: number = 16;
let studenteC: string = "Luca";
let etaC: number = 17;
let studenteD: string = "Gianni";
let etaD: number = 15;
let mediaeta: number = 0;

let classe1A: metadati1A[] = [];

classe1A.push([studenteA, etaA], [studenteB, etaB], [studenteC, etaC], [studenteD, etaD]);

for (let i = 0 ; i< classe1A.length ; i++){
    mediaeta= mediaeta + classe1A[i][1]
}

  mediaeta /= classe1A.length;

console.log(`la classe 1A ha ${classe1A.length} con una media di eta pari à ${mediaeta}`); 

