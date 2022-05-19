https://github.com/JoseLuisSantana/Calculadora.gitCalculadora
alert("Bienvenido a mi calculadora")
let opc =prompt("Que operacion desea hacer ?" + "A/-Suma"+"B/-Resta"+"C/-Multiplicacion"+"D/-Divicion")

switch (opc){
    case opc === "A" && "a":
        alert(suma)
    break

    case opc === "B" && "a":
        alert(Resta)
    break

    case opc === "C" && "c":
        alert(Multiplicacion)
    break

    case opc === "D" && "c":
        alert(Divicion)
    break
}

function suma(num1, num2, total)
{
   let num1= prompt("Ingrese el primer numero a Sumar")
   let num2= prompt("Ingrese el segundo numero a Sumar")
    total= num1 + num2

    return total;

}

function Resta(num1, num2, total){
    let num1= prompt("Ingrese el primer numero a Restar")
    let num2= prompt("Ingrese el Segundo numero a Restar")
    total=num1-num2
    return total;
}

function Multiplicacion(num1, num2, total)
{
    let num1= prompt("Ingrese el primer numero a Multiplicar")
    let num2= prompt("Ingrese el segundo numero a Multiplicar")
    total=num1*num2
    return total;
}
function Divicion(num1, num2, total){
    let num1= prompt("Ingrese el primer numero a Dividir")
    let num2= prompt("Ingrese el segundo numero a Dividir")
    total=num1/num2
    return total;

}