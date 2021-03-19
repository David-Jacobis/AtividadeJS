function MaiorNum(Numero_string){
    let numero = Numero_string.split(',');
    let maior= 0
    for(let i=0;i<numero.length;i++){  
        if(numero[i] > maior){
            maior = numero[i]
        }
    }
    return maior
}
let numero = prompt('Digite 5 números por virgulas');
console.log(MaiorNum(numero))