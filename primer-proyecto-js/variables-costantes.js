//Variables 
//Que es una variable??

//Declarar variables 
var variableVAR; //variable de distancia: es una variable que se utiliza en cual quier poarte deel codigo y se pude reutilizar en uno o mas archivo, en cualquier seccion del codugo 
let variableLET; //variable local 

for(let i = 3; i < 5; i++){ //i es una variable local 
    console.log(i)
}

var i=9;
console.log(i)//i es una variable de instancia
              //independiente de la i  dentro del for

              
//como se declaran la variables 
var x;
x = 0;
console.log(x)


var z = 8;
console.log(z)


let s;
 s =7;
 console.log(s)

 let f =17;
 console.log(f)



 // variable let mal declarada o redundante 
 var varible  = "soy una variable  VAR";
 let variable1 = "soy una variable  LET";
for(let i =3; i++){
    let variable1 = " soy una variable LET reutilizada";
}
// variable let declarada despues de usarla 
var varible  = "soy una variable  VAR";
for(let i =3; i < 5; i++){
    let variable1 = " soy una variable Let";
}
let variable1 = "soy una balriable let ";
