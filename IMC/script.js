let botaoCalcular = document.getElementById(btn_calcular);
function calculandoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value/100;
    let resultado = document.getElementById("resultado")
    if(altura !== "" && peso !==""){
        let imc = (peso / (altura*altura)).toFixed(2);
        let mensagem = "";
        if(imc < 18.5){
            mensagem = "Abaixo do peso!"
        }else if(imc < 25){
            mensagem = "Peso ideal!"
        }else if(imc < 30){
            mensagem = "Acima do peso!"
        }else if(imc < 35){
            mensagem = "Obesidade grau I"
        }else if(imc < 40){
            mensagem = "Obesidade grau II"
        }else {
            mensagem = "Obesidade grau III"
        }
        resultado.textContent = `${imc}! ${mensagem}`;      
    }else{
        resultado.textContent = "Preencha todos os campos!!!"
    }
}
btn_calcular.addEventListener('click', calculandoIMC);