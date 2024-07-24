//array, lista, objeto, o vector 
//son un conjunto de variables 
//los objetos son entidades que tienen atributos y los atributos son todas las caracteristicas que pertenecen al objeto 
//ejemplo  de como declarar un array 
const datos = [1, "Hola", true, undefined, null];
const datos2= new Array(1, "Hola", true, undefined, null);
const datos3= new Array(3); //----> array con llenado posterior a la declaracion 
datos3[1]= "Hola mundo";
datos3[0]= 1;
const datos4=[datos, datos2, datos3];//---> lista de listas 
//ejemplos de imprecion 
console.log(datos);
console.log(datos2);
console.log(datos3);
console.log(datos4);// metodo de imprecion 

//objeto 
//ejemplo de objeto 
const alumno = {
 // atriburos 
 edad: 15,
 peso: 80,
 nombre: "pedro",
 isBlack: false,
 amistades: ["confi1", "confi2", "confi3", "confi4"]
}

//imprecion del objeto 
console.log(alumno);

//imprecion espesifica
console.log(alumno.amistades);