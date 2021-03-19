
let idade = prompt('Digite 5 números por virgulas');
function MaiorIdade(Idade_string){
    let maior = 0
    let menor = 0
    let idade = Idade_string.split(',')
    for(let i= 0; i<idade.length; i++){
        if(Number(idade[i]>=18)){
         maior++ 
        }else{
        menor++
        }
    }
console.log('O número de pessoas maior de idade é: '+maior)
console.log('O número de pessoas menores de idade é: '+menor)
}

