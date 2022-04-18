console.group("cuadrado");

function perimetroCuadrado (lado){
    return lado *4;
}



 function areaCuadrado(lado){
     return lado * lado;
 }

console.groupEnd();

console.group("triangulo");

function perimetroTriangulo(lado1,lado2,lado3){
    perimetroTriangulo = lado1 + lado2 + lado3;
    return(perimetroTriangulo);
}

function areaTriangulo(base, altura){
    return base * altura;
}
console.groupEnd();

console.group("circulo");

function diametroCirculo(radio){
    return radio*2;

}

function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro * Math.PI;

}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;

}

console.groupEnd();

console.group("TrianguloIsosceles");

function trianguloIsosceles(lado1, lado2, base){

    if ( lado1 === lado2 && lado1 != base){
        altura = Math.sqrt(lado1**2- (base**2/4));
        return altura;
    }
    else{
        alert("Datos Invalidos, no es un triangulo isosceles")
    }
    

}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");

    const value1 = Number(input.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetroT = perimetroTriangulo(value1,value2,value3);
    alert(perimetroT);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTrianguloA");
    const input2 = document.getElementById("InputTrianguloA1");

    const value1 = Number(input.value);
    const value2 = Number(input2.value);

    const areaT = areaTriangulo(value1,value2);
    alert(areaT);
}

function calcularCircunferencia(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const circunferencia = perimetroCirculo(value);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const areaC = areaCirculo(value);
    alert(areaC);

}