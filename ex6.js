    
    function InverterNome (nome_string){
        let Nome = nome_string.split(',')
    for(let i = 0; i< Nome.length; i++){  
       Nome.reverse()
    }
}
let Nome = prompt('Digite os Nomes separados por virgulas');
console.log(InverterNome(Nome.reverse()))