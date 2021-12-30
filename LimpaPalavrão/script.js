function limparTexto(){

    const btnLimpar = document.getElementById('btn-Limpar')
 
    if(btnLimpar.innerText == "Limpar outra frase"){
        location.reload(true)
        return
    }

    const regex = /\bporra\b|caraio|merda|poha|puta|puto/gi  //Lista de palavrões 
    const texto = document.getElementById('campoTexto').value
    const campoQtdPalavroes = document.getElementById('quantidadePalavroes')
    
    let contadorDePalavroes = 0

 
    var arrayDePalavras = texto.split(" ")
    
    arrayDePalavras = arrayDePalavras.filter(function(element) {

        if(element != " " && element != "\n"){
            return element
        }
    }); 

    
    arrayDePalavras.forEach((element, index) => {
        
        if(element.match(regex)){
           arrayDePalavras[index]=element.replace(regex, "***")
            contadorDePalavroes++
        } 
    });


    if(texto.length == 0){
        alert("Coloque a sua frase no campo !")

    }else if(contadorDePalavroes == 0){
        alert("Sua frase está limpinha !")

    }else{

        const campoTexto = document.getElementById('campoTexto')
        campoTexto.value = arrayDePalavras.join(" ")
        campoTexto.style.border = "2px solid #00d48f"
        
    
        if(contadorDePalavroes == 1){
            campoQtdPalavroes.innerHTML = "<strong>" + contadorDePalavroes  + " palavrão " + "</strong>" + "foi removido :)"
        }else{
            campoQtdPalavroes.innerHTML = "<strong>" + contadorDePalavroes  + " palavrões " + "</strong>" + "foram removidos :)"
        }

        
    
        const fraseLimpa = document.getElementById('fraseLimpa')     
        fraseLimpa.toggleAttribute('hidden')

        
        btnLimpar.style.backgroundColor = "#00d48f"
        btnLimpar.style.color = "#fff"
        btnLimpar.innerText = "Limpar outra frase"

        
    }

    
    
}

function contarCaracter(valor){
    var cont = valor.length; 
    document.getElementById("quantidade").innerHTML = cont ;
}