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

//to fixed
const precoProduto =199.99;
const desconto = 0.15;
const precoFinal = precoProduto * (1 - desconto);
console.log(precoFinal)
console.log(`R$ ${precoFinal.toFixed(2)}`);

//metodo de array
const produtos = [
    {nome:"Teclado Mecânico", preco:200,promocao:true},
    {nome:"Mouse Gamer", preco:300,promocao:false},
    {nome:"Monitor Gamer", preco:900,promocao:true},
    {nome:"Pad Mouse", preco:70,promocao:false},
]
console.log(produtos)