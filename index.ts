// mkdir ts
// cd ts
// npm init -y 
// npm i typescript
// tsc index.ts
// tsc --init
// Dir public outDir en tsconfig.json
// tsc


// INFERENCIA DE DATOS

// Ejemplo 1

const PI = 3.14;
let b = 10;
let c = b + PI;

b = "pepe" // Avisa del error

// Ejemplo 2

let text = "hola mundo"

text.math(1) // Avisa del error


// TIPAR VARIABLES EN LAS FUNCIONES


function greeter(person: string) {
    return "Hello, " + person;
}
// con any pasa todo
   
let nameUser = "Ana";
   
document.body.textContent = greeter(nameUser);
document.body.textContent = greeter(3); // Avisa del error

function greeter(person: string) {
    return "Hello, " + person;
}

function saludar(persona: {name: string, age: number}) {
    const {name, age} = persona;
    return "Hello, " + persona.name + " " + persona.age;
}
saludar({name: "Ana", age: 30});


// TIPAR LA DEVOULCION DE LAS FUNCIONES


function saludar2(persona: {name: string, age: number}): string {
    const {name, age} = persona;
    return "Hello, " + persona.name + " " + persona.age;
}
saludar({name: "Ana", age: 30});

// Tipado de arrow function

const sumar = (a:number, b:number): number => a + b;

// Tipado de function con callback

function sumar3(a:number, b:number, callback: (result: number) => void): void {
    callback(a + b);
}
function sumar4(a:number, b:number, fn: (result: number) => void): void {
    fn(a + b);
}

sumar3(2, 3, (result) => console.log(result));


// INTERFACER

// hay inferecnia con el primer objeto creado

// Contrato con el objeto
// scalCase, se hace más claro que estos tipos representan conceptos o entidades significativas dentro del código
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};


// ARRAY

const lenguages = [];   
const lenguages2:string[] = [];

const lenguages4:(string | number | boolean)[] = [];

// El entiende que va a estar vacio por inferencia
lenguages.push("JavaScript");
lenguages2.push(2); // Avisa del error
lenguages4.push(2); // Avisa del error


// TUPLE, ARRAY MULTINIVEL

type CellValue = 2 | "0" | " ";
type Row = [CellValue, CellValue, CellValue];

const board: Row[] = [
    [" ", "0", " "],
    [" ", "0", " "],
    [" ", "0", " "],
];


// DIFERENCIAS


const opcion1:string[] = [];
const opcion2: Array<string> = [];

// Esta sintaxis utiliza el tipo genérico Array, donde string es el tipo de los elementos dentro del arreglo. Aunque es completamente válida y hace lo mismo que la primera opción, es un poco más verbosa. Esta forma puede ser más familiar para personas provenientes de otros lenguajes de programación que utilizan genéricos de manera explícita, como Java o C#. Además, esta sintaxis es útil cuando se necesitan tipos complejos, como un arreglo de arreglos (Array<Array<string>>) o cuando se utilizan uniones de tipos dentro del genérico (Array<string | number>).

// La elección entre string[] y Array<string> suele ser una cuestión de preferencia personal o de la guía de estilo del proyecto. Sin embargo, la comunidad de TypeScript tiende a preferir string[] por su simplicidad y legibilidad cuando se trata de tipos simples como string, number, etc. Para tipos más complejos o cuando se utilizan características genéricas avanzadas, Array<T> puede ser más adecuado o claro.


// TODO

// Type Alias, object freeze, mutabilidad, template union types, intersection types, type indexing, type from function return.
