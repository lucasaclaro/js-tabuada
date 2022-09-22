function gerarTabuada() {
    var dadosNumero = document.getElementById("numero").value
    var numero = Number(document.getElementById("numero").value)
    resultado = document.getElementById("resultado")

    if (dadosNumero.length == 0) {
        window.alert("Favor inserir algum número para gerar a tabuada")
    } else {
        for (var contador = 0; contador < 11; contador++) {
            resultado.innerHTML += `${numero} x ${contador} = ${contador * numero} <br>`
    
        }   
    }



}
