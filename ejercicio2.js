let nome= prompt ("coloque seu nome (1era pessoa)")
let sobrenome= prompt( "coloque seu sobrenome")
let idade = prompt( "coloque sua idade")
let numero= Number(idade)
let color= prompt ("qual e sua cor preferida?")

let nome1= prompt ("coloque seu nome (2da pessoa)")
let sobrenome1= prompt ("coloque seu sobrenome")
let idade1= prompt ("coloque sua idade")
let numero1= Number(idade1)
let color1= prompt ("qual e sua cor preferida?")

function resultado() {

    console.log('DATOS PERSONALES')

    if (numero > numero1){
        console.log(`${nome} ${sobrenome} é mais velho/a que ${nome1} ${sobrenome1}`)
    } else if (numero >= numero1){
        console.log(`${nome1} ${sobrenome1} tem a mesma idade que ${nome} ${sobrenome}`)
    } else {
        console.log(`${nome1} ${sobrenome1} é mais velho/a que ${nome} ${sobrenome}`)
    }
    
}

function colores() {
    console.log ( 'QUAL É SUA COR PREFERIDA?')

    if (color === color1){
        console.log (`${nome} ${sobrenome} e ${nome1} ${sobrenome1} Gostam da mesma cor`)
    } else{
        console.log(`Para gostos tem cores..`)
    }

}




resultado();
colores();






    