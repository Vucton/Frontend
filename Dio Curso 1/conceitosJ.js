//-------------- ALGORITMO COM JAVASCRIPT --------------



//Messagem de de inicio do meu programa | output
console.log("Informe seu nome de Jogador: ")

//Declarando uma variavel
let nickname = "Vucton" //o valor pode ser alterado a qualquer momento

concatenando uma messagem com uma variavel | meu output
console.log("Bem Vindo "+ nickname)

console.log(nickname+" Entrou no servidor global")


//declarando uma constante
const notificacao = "Pokemon Go diz: " //uma constante é valor que nao varia

//saida
console.log(notificacao +"Novo pokemon avistado!!")
console.log(notificacao +'Você foi derrotado por um líder')

//Aprendendo sobre variaveis como declarar e a diferença para uma constante
//Variaveis podem mudar o valor que esta armazenado como fiz com a 'pote de açucar'
let potecafe = "Cafe Espinosa";
let poteacucar = "Açucar Refinado";
let potebiscoito = "Biscoito de Sal";

poteacucar = "Açucar Mascavo";
console.log("Na cozinha da vovó hoje tem:  " +potecafe+", "+poteacucar+", "+potebiscoito)

//Entendendo os tipos de variaveis, vc nao precisa declarar o seu tipo na hora de criar 
//O proprio javascript ja entende conforme o valor que aquela variavel esta recebendo

let nomePokemon = "Kadabra"
let nivelPokemon = 20
let pontosDeVida = 50
let sexoPokemon = "M"
let statusPokemon = false
let mostrarStatus 

if(statusPokemon === true){
  mostrarStatus= "Pronto para Lutar"
}else{
  mostrarStatus = "Cansado, não pode lutar"
}

console.log("--- PokeDesk ---\nNome: "+nomePokemon
+" \nNivel: "+nivelPokemon
+"\nPontos de Vida: "+pontosDeVida
+"\nSexo do Pokemon: "+sexoPokemon
+"\nStatus do Pokemon: "+mostrarStatus)

//Aprendendo sobre vetores
//como construir uma coleção

let Pokemons = ["Pikachu", "Bulbasaur", "Charmander"]

console.log("Nomes: "+Pokemons)

//Em javascript o operador '=' tem 3 maneiras diferentes de usar

//atribuição de um valor
let numero = 1

//comparar o valor
console.log(numero == 1)

//comparar o valor e o tipo do conteudo
console.log(numero === "1")

//verifica se o valor é diferente
let marca = "Fiat"

console.log(marca !== "fiat")


let idade = 18
let visto = "aprovado"
let nomeUsuario = "Joao Victor"

if ((idade >= 18) && (visto !== "negado")){
  console.log("Passageiro "+nomeUsuario+" de "+idade+" anos pode viajar, seu visto foi "+visto)
}else{
  console.log("Passageiro "+nomeUsuario+" de "+idade+" anos nao pode viajar, seu visto foi "+visto)
}