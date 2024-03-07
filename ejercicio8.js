

const estado = "ganador"
const ganancia1 = monto/1.5


let carreras = parseInt(prompt("Los pilotos y cuotas de la carrera 1 se muestran a cotinuación: \n1. Piloto A (1.5) \n2. Poloto B (2.3) \n3. Piloto C (1.8)"))

switch(carreras){
    case(1):
    alert("Has elegido al piloto A, con cuota de (1.5)")
    apuesta = parseInt(prompt("Selecciona una apuesta a realizar: \n1. Ganador de la carrera \n2. Posiciones exactas (1ro y 2do puesto)"))
        if(apuesta==1){
            alert("Has elegido apostar por el ganador de la carrera")
        }else if(apuesta==2){
            alert("Has elegido las posiciones exactas")
        }else{
            alert("Por favor, elija una apuesta predeterminada")
        }
    monto = prompt("Por favor, ingrese el monto a apostar (MIN. 10.000 - MAX. 1.000000")
        if(monto>10000 && monto<=1000000){
            alert(`El monto a apostar es: ${monto}`)
        }else{
            alert("Por favor, ingrese un monto adecuado")
        }
    alert("PROCESANDO APUESTA........")

    alert("CARRERA TERMINADA")

    alert("EL USUARIO HA GANADO")

    alert(`Las ganancias son: ${ganancia1}`)

    alert("GRACIAS POR REALIZAR SU APUESTA")
    break;

    case(2):
    alert("Has elegido al piloto B, con cuota de (2.3)")
    apuesta = parseInt(prompt("Selecciona una apuesta a realizar: \n1. Ganador de la carrera \n2. Posiciones exactas (1ro y 2do puesto)"))
        if(apuesta==1){
            alert("Has elegido apostar por el ganador de la carrera")
        }else if(apuesta==2){
            alert("Has elegido las posiciones exactas")
        }else{
            alert("Por favor, elija una apuesta predeterminada")
        }
    monto = prompt("Por favor, ingrese el monto a apostar (MIN. 10.000 - MAX. 1.000000")
        if(monto>10000 && monto<=1000000){
            alert(`El monto a apostar es: ${monto}`)
        }else{
            alert("Por favor, ingrese un monto adecuado")
        }
    alert("PROCESANDO APUESTA........")

    alert("CARRERA TERMINADA")

    alert("EL USUARIO HA GANADO")

    alert(`Las ganancias son: ${ganancia1}`)

    alert("GRACIAS POR REALIZAR SU APUESTA")
    break;

    case(3):
    alert("Has elegido al piloto C, con cuota de (1.8)")
    apuesta = parseInt(prompt("Selecciona una apuesta a realizar: \n1. Ganador de la carrera \n2. Posiciones exactas (1ro y 2do puesto)"))
        if(apuesta==1){
            alert("Has elegido apostar por el ganador de la carrera")
        }else if(apuesta==2){
            alert("Has elegido las posiciones exactas")
        }else{
            alert("Por favor, elija una apuesta predeterminada")
        }
    monto = prompt("Por favor, ingrese el monto a apostar (MIN. 10.000 - MAX. 1.000000")
        if(monto>10000 && monto<=1000000){
            alert(`El monto a apostar es: ${monto}`)
        }else{
            alert("Por favor, ingrese un monto adecuado")
        }
    alert("PROCESANDO APUESTA........")

    alert("CARRERA TERMINADA")

    alert("EL USUARIO HA GANADO")

    alert(`Las ganancias son: ${ganancia1}`)
    
    alert("GRACIAS POR REALIZAR SU APUESTA")
    break;
    default:
        alert("Por favor, seleccione una opción predeterminada")
}