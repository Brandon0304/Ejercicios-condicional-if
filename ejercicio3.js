

const Clásicos= 500000;
const Running= 800000;
const Basketball= 1000000;

const descuento = 0.01
const preciodcuento = cantidad*Clásicos-(Clásicos-descuento)
const precionormal = cantidad*Clásicos

let tipozapato = parseInt(prompt("Seleccione un tipo de zapato: \n1. Clásico \n2. Running \n3. Basketball"))

if(tipozapato===1){
    alert("El tipo de zapato elegido es: clásico")
    talla = parseInt(prompt("Seleccione una talla: Min. 35 - Max. 44"))
    alert(`La talla seleccionada es: ${talla}`)
    if (talla <= 35 && talla >= 44){
        alert("Talla fuera del rango permitido (35-44)")}
    cantidad = parseInt(prompt("Elija una cantidad: Min. 1 par - Max. 5 pares"))
    alert(`La cantidad de pares seleccionada es: ${cantidad}`)
    if(cantidad < 1 && cantidad > 5){
        alert("Cantidad por fuera del rango establecido (1-5 pares)")
        alert(`El precio a pagar por la cantidad establecida es: ${precionormal}`)}
}else{
    alert("Por favor, elija una opción predeterminada")
}
if(tipozapato===2){
    alert("El tipo de zapato elegido es: Running")
    talla = parseInt(prompt("Seleccione una talla: Min. 35 - Max. 44"))
    alert(`La talla seleccionada es: ${talla}`)
    if (talla <= 35 && talla >= 44){
        alert("Talla fuera del rango permitido (35-44)")}
    cantidad = parseInt(prompt("Elija una cantidad: Min. 1 par - Max. 5 pares"))
    alert(`La cantidad de pares seleccionada es: ${cantidad}`)
    if(cantidad < 1 && cantidad > 5){
        alert("Cantidad por fuera del rango establecido (1-5 pares)")
        alert(`El precio a pagar por la cantidad establecida es: ${precionormal}`)}
}else{
    alert("Por favor, elija una opción predeterminada")
}
if(tipozapato===3){
    alert("El tipo de zapato elegido es: basketball")
    talla = parseInt(prompt("Seleccione una talla: Min. 35 - Max. 44"))
    alert(`La talla seleccionada es: ${talla}`)
    if (talla <= 35 && talla >= 44){
        alert("Talla fuera del rango permitido (35-44)")}
    cantidad = parseInt(prompt("Elija una cantidad: Min. 1 par - Max. 5 pares"))
    alert(`La cantidad de pares seleccionada es: ${cantidad}`)
    if(cantidad < 1 && cantidad > 5){
        alert("Cantidad por fuera del rango establecido (1-5 pares)")
        alert(`El precio a pagar por la cantidad establecida es: ${precionormal}`)}
}else{
    alert("Por favor, elija una opción predeterminada")
}
