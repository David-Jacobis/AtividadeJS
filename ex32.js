 function calcularIdadeDoCachorro(){
     let IdadeCachorro = 13
     IdadeCachorro = IdadeCachorro*7
    
return IdadeCachorro +(' ') + FaixaEtaria ()
 }
 function FaixaEtaria (){
     let IdadeCachorro = 13
        if(IdadeCachorro<14){
            return 'Criança'
        }else if (IdadeCachorro>14 && IdadeCachorro<28){
            return 'Adolescente'
        }else{
            return 'Adulto'
        }
}

console.log(calcularIdadeDoCachorro())