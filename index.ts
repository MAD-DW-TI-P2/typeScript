// mkdir ts
// cd ts
// npm init -y 
// npm i typescript
// tsc index.ts
// tsc --init
// Dir public outDir en tsconfig.json
// tsc


// Types

function greeter(person: string) {
    return "Hello, " + person;
}
   
let nameUser = "Ana";
   
document.body.textContent = greeter(nameUser);


// Interfaces


interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};