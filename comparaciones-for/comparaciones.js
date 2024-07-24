//comparaciones 
//igualdad
if (5 ==5 ){
    console.log("5 es igual a 5")
}


if (5 ==5 ){
    console.log("5 es igual a 5")
}

//== solo compara los valores 
//===  busca ademas el valor contenido, el tipo de variables,
//y lo hace de manera mas espesifica 
let a = 5;
console.log(typeof a);

let b = "5";
console.log(typeof a);

if (a == b){
    console.log("a es igual a b debil")
}

if (a === b){
    console.log("a es igual b fuerte ")
}

//desigualdad 
//=solo compara los valores 
//==busca ademas el valor contenido, el tipo de variables,
//y lo hace de manera mas espesifica 
let  c = 4;
let  d = 10;

if  (c  != d){
    console.log("c es diferente que d DEBIL ");
}

if  (c  !== d){
    console.log("c es diferente que d FUERTE ");
}

//mayor que menor que 
let max = 10;
let min = 5;

if (max > min){
    console.log("max es mayor que min")
}
if (max >= min){
    console.log("max es mayor o igua que min")
}
if (max < min){
    console.log("max es menor que min")
}
if (max <= min){
    console.log("max es menor o igual que min")
}