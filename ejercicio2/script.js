function isLeapYear(numero1,numero2){ //declaro la función con los datos que necesita para que se ejecute

    //Comprobamos que sea un numero
    if(isNaN(numero1) || isNaN(numero2)){
        alert("El número proporcionado no es válido")
        return
    }


    //pasamos los números a enteros por si se han dado de forma decimal
    this.numero1 = Math.floor(numero1)
    this.numero2 = Math.floor(numero2)

    //comprobamos que no salga del rango pedido
    if(numero1<2001 || numero2 > 2500 ){
        alert("El número proporcionado no es válido")
        return
    }

    //creamos el Array de años bisiestos

    const bisiestos = []


    //Hacemos un bucle para ver los que años son bisiestos, y los que sean se meterán en la lista bisiestos
    for(i=numero1;i<=numero2;i++){
        if(i%4===0){
            bisiestos.push(i)
        }if(i%10===0 && i%400===0){
            bisiestos.push(i)
        }
    }

    //Hacemos que los elementos del array se unan con una coma entre ellos

    const resultado = bisiestos.join(",")

    alert(resultado) 
}

//Dejamos que el usuario meta dos años
const firstyear = window.prompt("Introduce el primer año")
const secondyear = window.prompt("Introduce el segundo año")

//Se ejecuta la función con los datos introducidos
isLeapYear(firstyear,secondyear)