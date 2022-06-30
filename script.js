/*let legajo
do{
    legajo=parseFloat(prompt("ingresa tu legajo"))
}while(isNaN(legajo))
alert("ya puedes ingresar")
console.log(legajo)*/


let nota1, nota2, promedio

do{
    nota1=parseInt(prompt("ingrese nota de parcial de 0 a 10"))
    nota2=parseInt(prompt("ingrese nota de segundo parcial de 0 a 10"))
    
}while((isNaN(nota1)) || (isNaN(nota2)) || (nota1<0 || nota1>10) || (nota2<0 || nota2>10)){
    promedio= (nota1 + nota2)/2
}
alert( "tu promedio es" +" " + promedio)

