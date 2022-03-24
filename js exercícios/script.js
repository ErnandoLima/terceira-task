

    1-

     let nome = (prompt("Digite seu nome"));
     alert("Seu nome é " + nome);
     console.log(nome);


   2-

     let num1 = parseInt(prompt("Digite um numero"));
     let num2 = parseInt(prompt("Digite outro numero"));
     console.log(num1 + num2);


    3-

     let nota1 = parseInt(prompt("Digite sua primeira nota"));
     let nota2 = parseInt(prompt("Digite sua segunda nota"));
     console.log((nota1 + nota2)/2);


    4-

     let an = parseInt(prompt("que ano você nasceu?"));
     console.log(2022 - an);

    5-

     let sh = parseInt(prompt("quanto vc recebe por hora?"));
     let hm = parseInt(prompt("quantas horas vc trabalhou esse mes?"));
     console.log(sh * hm);

     6-

     let tempf = parseFloat(prompt("digite a temperatura em farhrenheit"));
     console.log (((tempf - 32) * 5)/9);

    
    
    
    
     1-

     let num1 = (prompt("Digite um numero"));
     let num2 = (prompt("Digite outro numero"));

     if(num1 > num2){
         console.log(num1);
     } else {
         console.log(num2);
     }

     2-

     let num = (prompt("Digite um numero"));

        if(num >= 0) {
            alert("O numero eh positivo");
     } else {
         alert("O numero eh negativo");
     }



     3- 

     let sexo = (prompt("Digite M ou F para indicar seu sexo"));

     if(sexo == "m") {
         alert("Seu sexo é masculino");
     } 
     else if(sexo == "f") {
         alert("Seu sexo é feminino");
     } else {
         alert("Sexo invalido");
     }

    
    4-

     let nota1 = parseInt(prompt("Digite sua primeira nota"));
     let nota2 = parseInt(prompt("Digite sua segunda nota"));
     let media = ((nota1 + nota2)/2);

     if(media >= 7 && media < 10){
         alert("Aprovado");
     }
     else if(media < 7 && media == 0){
         alert("Reprovado");
     }
     else if(media == 10) {
         alert("Aprovado com Distinção");
     }else{
         alert("Nota invalida");
     }



    5-

     let num1 = parseInt(prompt("Digite um numero"));
     let num2 = parseInt(prompt("Digite um numero"));
     let num3 = parseInt(prompt("Digite um numero"));
     let maior = (num1);
     let menor 

     if(num2 > num1 && num2 > num3) {
         maior = (num2);
     }
     else if(num3 > num1 && num3 > num2){
         maior = (num3);
         menor = (num1);
     }
     else if(num2 < num1 && num2 < num3){
         menor = (num2);
     }
     else if(num3 < num1 && num3 < num2){
         menor = (num3);
     }
     alert("Maior numero é " +maior);
     alert("Menor numero é " +menor);



     6-

     let num1 = parseInt(prompt("Digite um numero"));
     let num2 = parseInt(prompt("Digite outro numero"));
     let par
     let impar
     let par1
     let impar1

     if(num1 % 2 == 0 ) {
         par = (num1)
     }else {
         impar = (num1)
     }
     if(num2 % 2 == 0 ) {
         par1 = (num2)
     }else {
         impar1 = (num2)
     }
     if(num1 == par){
         alert("o numero é par")
     }else {
         alert("O numero é impar")
     }
     if(num2 == par1){
         alert("o numero é par")
     }else {
         alert("O numero é impar")
     }