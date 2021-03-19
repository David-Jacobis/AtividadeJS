

function somarValores(valor_string){
    let valor = valor_string.split(',')
    let soma = 0
    for (let i = 0; i<valor.length;i++){
        soma = soma +Number(valor[i])
             if(valor == null){
            
        }
    }
    return soma  
}
let valor = prompt('Informe valores separados por vírgulas')
console.log(somarValores(valor))


