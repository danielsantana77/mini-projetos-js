var calc = document.getElementById('calcular')


calc.addEventListener('click', calcular)


function calcular(){
   
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var nome = document.getElementById('nome').value

    var texto = document.getElementById('resultado')
    
    if(altura == "" || peso == "" || nome == ""){
        texto.innerHTML = "Sem dados para calcular"
        
    }else{
    var imc = peso/(altura*altura)
    imc = (imc*10000).toFixed(2)
    
    var calculoIMC

    if(imc < 18.5){
        calculoIMC = "Magreza"
    }else if(imc >= 18.5 && imc <= 24.9){
        calculoIMC = "Normal"
    }else if(imc >= 25 && imc <= 29.9){
        calculoIMC = "SobrePeso"
    }else if(imc >= 30 && imc <= 39.9){
        calculoIMC = "Obesidade"
    }else {
        calculoIMC = "Obesidade Grave"
    }


    texto.innerHTML = "Nome : " +nome +"\n"+ "IMC : " +imc +"\nQualidade : " + calculoIMC 
    }
}