let Nome = prompt("Qual seu Nome?")
let idade = prompt("Qual sua idade")
let Metros = prompt("Quanto de altura?")
let Kg = prompt("Pesa quanto?")

let nascimento = 2000;
nascimento = 2024 - idade

let imc = 0
imc = Kg / (Metros * Metros)

console.log("Meu nome é " + Nome + " tenho " + idade + " Anos " + " Nasci em " + nascimento + " e tenho " + Metros + " e peso " + Kg + " Kgs" + " e seu IMC é " + imc)
