var botaoCalc = document.querySelector("#botao-calc");
botaoCalc.addEventListener("click", converte);

function converte(entrada) {
    console.log("Fui clicado");
    entrada = conversor.value;
    decimal = parseFloat(entrada);
    console.log(decimal);

    var binario = decimal.toString(2);
    var octal = decimal.toString(8);
    var hexadecimal = decimal.toString(16);

    console.log(binario);
    console.log(hexadecimal);
    console.log(octal);


   // var decimal = parseInt(prompt("Entre com o valor decimal"))
    
    document.write("O número: " + decimal.toString(10) + " Corresponde a: <br>");
    document.write("Binário: " + decimal.toString(2) + "<br>");
    document.write("Octal: " + decimal.toString(8) + "<br>");
    document.write("Hexadecimal: " + decimal.toString(16) + "<br>");
     
    return(0);
}
