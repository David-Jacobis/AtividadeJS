let identificação = prompt('Identifique-se!')
if (identificação=='Admin'){
    let senha = prompt('Digite a senha')
    if(senha=='UNIBH'){
       alert('Bem vindo') 
    }else if(senha== null){
        alert('Cancelado')
    }else if(senha!= 'UNIBH'){
        alert('Senha Incorreta!')
    }
}else if(identificação == null){
    alert('Cancelado')
}
else if (identificação != 'Admin'){
    alert('Não conheço você')
}
