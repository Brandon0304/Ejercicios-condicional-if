
const general = 50000
const Preferencial = 150000
const vip = 300000

const impuesto = 0.010
const cargoboleta = 5000
const cargoescenario1 = general+(general*impuesto)
const cargoescenario2 = Preferencial+(Preferencial*impuesto)
const cargoescenario3 = vip+(vip*impuesto)


alert("Los precios por localidad son: \n1. General: $50000 \n2. Preferencial: $150000 \n3. VIP: $300000")
let escenario = parseInt(prompt("Seleccione una localidad: \n1. General \n2. Preferencial \n3. VIP"))

if(escenario==1){
    alert("La localidad seleccionada es: General")
    boletas = parseInt(prompt("Ingrese la cantidad de boletas que desea: \n1. 1 boleta \n2. 2 boletas \n3. 3 boletas \n4. 4 boletas \n5. 5 boletas"))
    if(boletas==1){
        alert("Has elegido una boleta")
    }else if(boletas==2){
        alert("Has elegido dos boletas")
    }else if(boletas==3){
        alert("Has elegido tres boletas")
    }else if(boletas==4){
        alert("Has elegido cuatro boletas")
    }else if(boletas==5){
        alert("Has elegido cinco boletas")
    }else{
        alert("Por favor, selecciona una cantidad de boletas predeterminada")
    }
    alert(`El total a pagar es: \nEscenario general: ${cargoescenario1} \nBoletas: ${boletas+cargoboleta}`)
    pago = parseInt(prompt("¿Cómo desea realizar su pago: \n1. Efectivo \n2. Tarjeta de crédito"))
    if(pago==1){
        alert("Su compra se realizará en efectivo")
    }else if(pago==2){
        alert("Su pago se realizará con tarjeta de crédito")
    }else{
        alert("Por favor, seleccione un método de pago aceptado")
    }
    alert("¡GRACIAS POR REALIZAR SU COMPRA!")
}else if(escenario==2){
    alert("La localidad seleccionada es: Preferencial")
    boletas = parseInt(prompt("Ingrese la cantidad de boletas que desea: \n1. 1 boleta \n2. 2 boletas \n3. 3 boletas \n4. 4 boletas \n5. 5 boletas"))
    if(boletas==1){
        alert("Has elegido una boleta")
    }else if(boletas==2){
        alert("Has elegido dos boletas")
    }else if(boletas==3){
        alert("Has elegido tres boletas")
    }else if(boletas==4){
        alert("Has elegido cuatro boletas")
    }else if(boletas==5){
        alert("Has elegido cinco boletas")
    }else{
        alert("Por favor, selecciona una cantidad de boletas predeterminada")
    }
    alert(`El total a pagar es: \nEscenario general: ${cargoescenario2} \nBoletas: ${boletas+cargoboleta}`)
    pago = parseInt(prompt("¿Cómo desea realizar su pago: \n1. Efectivo \n2. Tarjeta de crédito"))
    if(pago==1){
        alert("Su compra se realizará en efectivo")
    }else if(pago==2){
        alert("Su pago se realizará con tarjeta de crédito")
    }else{
        alert("Por favor, seleccione un método de pago aceptado")
    }
    alert("¡GRACIAS POR REALIZAR SU COMPRA!")
}else if(escenario==3){
    alert("La localidad seleccionada es: VIP")
    boletas = parseInt(prompt("Ingrese la cantidad de boletas que desea: \n1. 1 boleta \n2. 2 boletas \n3. 3 boletas \n4. 4 boletas \n5. 5 boletas"))
    if(boletas==1){
        alert("Has elegido una boleta")
    }else if(boletas==2){
        alert("Has elegido dos boletas")
    }else if(boletas==3){
        alert("Has elegido tres boletas")
    }else if(boletas==4){
        alert("Has elegido cuatro boletas")
    }else if(boletas==5){
        alert("Has elegido cinco boletas")
    }else{
        alert("Por favor, selecciona una cantidad de boletas predeterminada")
    }
    alert(`El total a pagar es: \nEscenario general: ${cargoescenario3} \nBoletas: ${boletas+cargoboleta}`)
    pago = parseInt(prompt("¿Cómo desea realizar su pago: \n1. Efectivo \n2. Tarjeta de crédito"))
    if(pago==1){
        alert("Su compra se realizará en efectivo")
    }else if(pago==2){
        alert("Su pago se realizará con tarjeta de crédito")
    }else{
        alert("Por favor, seleccione un método de pago aceptado")
    }
    alert("¡GRACIAS POR REALIZAR SU COMPRA!")
}else{
    alert("Por favor, elige un escenario disponible")
}