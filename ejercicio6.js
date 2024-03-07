
const hsimple = 25000
const pfamili = 85000
const fconpoll = 18000


let costoenvio = 5000



let restaurante = parseInt(prompt("Elija los restaurantes asociados: \n1. Hamburguesas \n2. Pizzería \n3. Comida china"))

if(restaurante==1){
    alert("Has elegido la hamburguesería")

    alert("El menú para este restaurante es: Hamburguesa simple ($25000)")

    cantidad = prompt("Ingresa la cantidad de artículos que quieres llevar (MIN. 1 - MAX. 19)")

    if(cantidad>0 && cantidad<20){
        alert(`La cantidad de hamburguesas simples es de: ${cantidad}`)
    }else{
        alert("Por favor, elija una cantidad adecuada")
    }

    alert(`
    La cantidad de hambrugesas simples es de: ${cantidad}
    El costo unitario de la hamburguesa simple es de: ${hsimple}
    El costo de envío es de: ${costoenvio}`)

    alert(`El total es: ${(hsimple*cantidad)+costoenvio}`)

}else if(restaurante==2){
    alert("Has elegido la pizzería")

    alert("El menú para este resturante es: Pizza familiar ($85000)")

    cantidad = prompt("Ingresa la cantidad de artículos que quieres llevar (MIN. 1 - MAX. 19)")

    if(cantidad>0 && cantidad<20){
        alert(`La cantidad de pizzas familiares es de: ${cantidad}`)
    }else{
        alert("Por favor, elija una cantidad adecuada")
    }

    alert(`
    La cantidad de pizzas familiares es de: ${cantidad}
    El costo unitario de la pizza familiar es de: ${pfamili}
    El costo de envío es de: ${costoenvio}`)

    alert(`El total es: ${(pfamili*cantidad)+costoenvio}`)

}else if(restaurante==3){
    alert("Has elegido la comida china")

    alert("El menú para este restaurante es: Fideos con pollo ($18000)")

    cantidad = prompt("Ingresa la cantidad de artículos que quieres llevar (MIN. 1 - MAX. 19)")

    if(cantidad>0 && cantidad<20){
        alert(`La cantidad de fideos con pollo es de: ${cantidad}`)
    }else{
        alert("Por favor, elija una cantidad adecuada")
    }

    alert(`
    La cantidad de fideos con pollo es de: ${cantidad}
    El costo unitario de los fideos con pollo es de: ${fconpoll}
    El costo de envío es de: ${costoenvio}`)

    alert(`El total es: ${(fconpoll*cantidad)+costoenvio}`)
}else{
    alert("Por favor, elija un restaurante admitido")
}