
/* 
var nome1;
nome1 = prompt("Digite seu nome");
alert("Olá, "+nome1+" :)");
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar"; //"agradecimento" é uma id do HTML e injetará uma mudança na própria página.
  // console.log(document.getElementById("agradecimento"));
  // alert("obrigado por clicar");
}

function redirecionar(){
   // window.open("https://www.linkedin.com/in/andreyamorim/"); //abre em outra janela
   // window.location.href="https://www.linkedin.com/in/andreyamorim/"; //abre na mesma janela
}

function trocar(elemento){
//    alert("trocar texto");
//    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"; 
}
    //"elemento" no documento js está vinculado ao "this" que se refere a própria estrutura (seja um parágrafo, um h, uma img) no documento HTML. Assim não é necessário criar uma função para cada estrutura. Uma função geral atua em vários elementos.

function voltar(elemento){
//    document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert ("Página carregada!");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar; esta var validar está funcionando apenas local. Caso fosse definida outra var validar fora da função seria utilizada a var global.
    if(idade>=18){
        validar=true
    }
    else{
        validar=false
    }
    return validar; poderia também ser colocada abaixo da condição if como return true e abaixo da condição else como return false
    }
var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade));
*/

/*
function soma(n1, n2){ 
    return n1 + n2; 
} created a function.
alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
} created a function.
alert(setReplace("vai Japão", "Japão","Brasil"));

*/
//var d = new Date();
//alert(d); alerts the system date.
//alert(d.getMonth()+1); //month starts at 0, so you put +1 to return the right month
//alert(d.getHours);
/*
var count; declarando a variável count.
for(count=0; count<=5; count++){
    alert(count);
};
*/

/*
var count=0;
while (count<5){
    console.log(count); o resultado retorna no console.
    alert(count); o resultado retorna no alert.
    count=count+1; é igual a count++.
}
*/

/*
var idade=prompt("Qual sua idade?"); exibe uma pergunta que interage com o usuário.
if(idade>=18){
    alert("maior de idade");
}
else{
    alert("menor de idade")
}
*/

//var frutas=[{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor: "roxa"}]; dicionario.
//console.log(frutas[1].nome);
//alert(frutas[1].cor);

//var fruta={nome:"maçã", cor:"vermelha"}
//console.log(fruta.nome); retorna a palavra que nome recebe dentro do console.
//alert(fruta.cor); alerta a palavra que a cor recebe na lista fruta.
//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva"); .push() insere um item a mais ao final da lista.
//lista.pop(); .pop() remove o último elemento ao final da lista.
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" ")); join("") insere um caractere entre cada elemento da lista.
//console.log(lista.length); .lenght mostra quandos elemetos há na lista.
//console.log(lista.reverse()); .reverse() inverte a posição dos elementos.
//alert(lista[1]);
//var nome = "Andrey Amorim";
//var n1 = 33;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo"
//alert("Bem vindo "+nome+", você tem "+idade+" anos");
//alert (n1+n2); devolte uma soma pois entende a variável como um inteiro.
//console.log(nome);
//console.log(n1+n2); também pode ser feita multiplicação.
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toLocaleUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil")); troca a palavra "Japão" por "Brasil" a função .replace atua tanto no console quando no alert.
