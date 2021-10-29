//-----------------------------Código del cuadrado----------------------------
function perimetroCuadrado (lado) {
    return lado*4;
} 

function areaCuadrado (lado){
    return lado*lado;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;
    const perimetro = perimetroCuadrado(valor);
    document.getElementById("inputResultadoCuadradoPerimetro").value = perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;    
    const area = areaCuadrado(valor);
    document.getElementById("inputResultadoCuadradoArea").value = area;
}

function limpiarCuadrado (){
    document.getElementById("inputCuadrado").value = "";
    document.getElementById("inputResultadoCuadradoPerimetro").value = "";
    document.getElementById("inputResultadoCuadradoArea").value = "";
}

//---------------------------Código del triángulo--------------------------------
function perimetroTriangulo (lado1, lado2, base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}

function alturaTriangulo (lado1, lado2, base) {
    const s = perimetroTriangulo (lado1, lado2, base)/2; //s es semiperimetro
    const altura = (2/base) * (Math.sqrt(s*(s-lado1)*(s-lado2)*(s-base)));
    if(lado1==lado2){        
        alert("Es un triangulo isosceles");
    }else{
        alert("No es un triangulo isosceles");
    }
    return altura;
} 

function areaTriangulo (lado1, lado2, base){
    const altura = alturaTriangulo (lado1, lado2, base);
    return (base*altura)/2;
}

function calcularPerimetroTriangulo() {
    const inputL1 = document.getElementById("inputTrianguloL1");
    const inputL2 = document.getElementById("inputTrianguloL2");
    const inputB = document.getElementById("inputTrianguloB");
    const valorL1 = inputL1.value;
    const valorL2 = inputL2.value;
    const valorB = inputB.value;
    const perimetro = perimetroTriangulo(valorL1,valorL2,valorB);
    document.getElementById("inputResultadoTrianguloPerimetro").value = perimetro;
}

function calcularAreaTriangulo() {
    const inputL1 = document.getElementById("inputTrianguloL1");
    const inputL2 = document.getElementById("inputTrianguloL2");
    const inputB = document.getElementById("inputTrianguloB");
    const valorL1 = inputL1.value;
    const valorL2 = inputL2.value;
    const valorB = inputB.value;   
    const area = areaTriangulo(valorL1,valorL2,valorB);
    document.getElementById("inputResultadoTrianguloArea").value = area;
}

function limpiarTriangulo (){
    document.getElementById("inputTrianguloL1").value = "";
    document.getElementById("inputTrianguloL2").value = "";
    document.getElementById("inputTrianguloB").value = "";
    document.getElementById("inputResultadoTrianguloPerimetro").value = "";
    document.getElementById("inputResultadoTrianguloArea").value = "";
}



//---------------------------Código del rombo------------------------------------
function perimetroRombo (lado) {
    return lado*4;
} 

function areaRombo (DiagMayor, DiagMenor){
    return (DiagMayor*DiagMenor)/2;
}

function calcularPerimetroRombo() {
    const input = document.getElementById("inputRombo");
    const valor = input.value;
    const perimetro = perimetroRombo(valor);
    document.getElementById("inputResultadoRomboPerimetro").value = perimetro;
}

function calcularAreaRombo() {
    const inputD = document.getElementById("inputRombo_D");
    const inputd = document.getElementById("inputRombo_d");
    const valorD = inputD.value;
    const valord = inputd.value;
    const area = areaRombo(valorD, valord);
    document.getElementById("inputResultadoRomboArea").value = area;
}

function limpiarRombo (){
    document.getElementById("inputRombo").value = "";
    document.getElementById("inputRombo_D").value = "";
    document.getElementById("inputRombo_d").value = "";
    document.getElementById("inputResultadoRomboPerimetro").value = "";
    document.getElementById("inputResultadoRomboArea").value = "";
}


//---------------------------Código del circunferencia----------------------------
const PI = Math.PI;

function diametroCirculo (radio) {
    return radio*2;
} 

function longitudCircunferencia (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCircunferencia (radio){
    return radio * radio * PI;
}

function calcularLongitudCircunferencia() {
    const input = document.getElementById("inputCircunferencia");
    const valor = input.value;
    const longitud = longitudCircunferencia(valor);
    document.getElementById("inputResultadoCircunferenciaPerimetro").value = longitud;
}

function calcularAreaCircunferencia() {
    const input = document.getElementById("inputCircunferencia");
    const valor = input.value;    
    const area = areaCircunferencia(valor);
    document.getElementById("inputResultadoCircunferenciaArea").value = area;
}

function limpiarCircunferencia (){
    document.getElementById("inputCircunferencia").value = "";
    document.getElementById("inputResultadoCircunferenciaPerimetro").value = "";
    document.getElementById("inputResultadoCircunferenciaArea").value = "";
}



//Ejemplo de console group
console.group("Cuadrado");
//const ladoCuadrado = 5; 
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");
//console.log("El área del cuadrado es: " + areaCuadrado + "cm2.");
console.groupEnd();




