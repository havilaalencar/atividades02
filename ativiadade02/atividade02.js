
for(let b = 5; b > 0; b--){ 
    console.log(b); 
}

console.log("Exemplo com Incremento da variável i"); 
 
for(let b = 0; b < 5; b++){
    console.log(i); 
}

console.log("Podemos usar o FOR para buscar valores em VETORES/ARRAYS"); 

let alunos = ["joazin","josuenifina","legolas","xiquim"]; 
let t = marcas.length;

for(let x = 0; x < t; x++ ) { 
}

console.log("------ Estrutura de Repetição While ------"); 



  let control = 0;     
  while(control < 6){     
   console.log(`${control} - Javascript`);     
   console.log();    
   control++;    
  }
 

 
 let bares= ["bar Do Thor","esquina Bar","bar Da Selma","bar Do Neno","bar Onde O Sol Nasce Torto"]; 

 let cont = 0;

 while(cont < bares.length){ 
  console.log(cont+ '-' +bares[cont]);
  cont++;
 }


console.log("--- Estrutura de Repetição DO WHILE ---"); 


do {
  console.log("Executado pelo menos uma vez"); 
}while(false) 

console.log("--- Estrutura de Repetição FOR IN ---"); 


let objeto = {1:"C", 2:"Python", 3:"C++", 4: "C#", 5:"PHP"};

   for(let prop in objeto) {
      console.log("Linguagem: "+ prop +" - "+objeto[prop]);
   } 

console.log("--- Percorrer Objetos ---"); 
  const individuo = { 
		nome:"xiquin xibatinha",
		idade:49,
		peso:42,
		altura:1.96
	   } 
  
   for(let atributo in individuo){  
    	console.log(individuo[atributo]);
    }


console.log("--- For In para Interar Vetores ---"); 

let lojaMecanica = ["Pneu De Guerra","Pneu Mania","Sua Rasteira Minha Alegria","Chama NaRoda","Arruma Carro De Bebo"];

   for(let element in lojaMecanica) {
      console.log("Index: "+element+" - "+lojaMecanica[element]);
   } 


console.log("--- Estrutura de reptição For Of ---"); 


let trabaio = ["Apnha Estrume De Vaca","Degustador De Cachça","Chamar NaBota","Derrubar boi"];

for(let curso of trabaio){
    console.log("Faculdade: - "+ trabaio);
}

let valoresFixos = [10, 20, 30];

for (const value of valoresFixos) {
  console.log(value);   
}


console.log("--- Usando FOR OF para Arrays de Objetos ---"); 

  const infoPessoa = [  
		   {nome: "Robison", idade: 18, altura:1.8},
		   {nome: "xiquin", idade: 28, altura:1.6},
		   {nome: "rambo", idade: 19, altura:1.5},
		   {nome: "lenilso", idade: 25, altura:1.9},
		   {nome: "nassilnina", idade: 32, altura:1.4},
         ];

    for(let funcionario of infoPessoa){
    console.log(funcionario.nome+" - "+funcionario.idade+" - "+funcionario.altura);
} 

console.log("--- Estrutura de Repetição ForEach ---"); 



let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Vetor

function tabuadaDe2(item) {  
    console.log(item*2);
}

numeros.forEach(tabuadaDe2); 



let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item; 
    console.log("Posição:" + indice + " - Soma = " + total); 
}


numeros.forEach(somar); 

let modelPhones = ["A31","MotoOne","A51","A72","Redmi"]; 

modelPhones.forEach(function(item,indice){
   console.log(indice+" = "+ item); 
}); 
