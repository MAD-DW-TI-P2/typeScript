"use strict";
// mkdir ts
// cd ts
// npm init -y 
// npm i typescript
// tsc index.ts
// o tsc init para crear el archivo tsconfig.json
// tsc compila todos los archivos ts a js, en la n el archivo tsconfig.json, busque la opción outDir, quite el comentario y establezca el parámetro en build
function greeter(person) {
    return "Hello, " + person;
}
let nameUser = "Ana";
document.body.textContent = greeter(nameUser);
const user = {
    name: "Hayes",
    id: 0,
};
