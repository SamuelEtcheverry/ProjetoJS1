//
const email ="      email@empresa.com        ";
const emailLimpo = email.trim(); //reemove espaços
console.log(emailLimpo);

//includes verifica se o dominio é valido
if(emailLimpo.includes("@")){
    console.log("Email válido.");
} else{
    console.log("Email inválido.");
}

//transformação de texto

const titulolivro ="Como aprender a PROGRAMAR";

const texto=titulolivro
.toLowerCase() //deixa minusculo
.split("a") //remove parte do texto
.join("-") //criar uma unica string

console.log(texto);