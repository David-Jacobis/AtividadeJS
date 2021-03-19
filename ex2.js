function calcularMedia(notas_string){
    let notas = notas_string.split(',');
    let soma = 0
    for (let i=0;i<notas.length;i++){   
    soma = soma + Number(notas[i]);
    }
    let media = soma/notas.length;
    return media;
}
let notas = prompt('Digite as notas separadas por virgulas');
console.log(calcularMedia(notas));