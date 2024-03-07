const escobadurasintetica = 8000
const escobaduranatural = 10000
const cepillosintetico = 12000
const cepillonatural = 15000
const mangolargo = 2000 //2000 adicionales
const ganchoenpunta = 500 // 500 adicionales


let tipoescoba = parseInt(prompt("Seleccione un tipo de escoba: \n1. Escoba dura \n2. Escoba suave \n3. Cepillo"))
let material1 = parseInt(prompt("Seleccione un tipo de material para su escoba: \n1. Cerdas sintéticas \n2. Cerdas naturales"))

switch(tipoescoba){
    case(1):
    alert("Has elegido la escoba dura")
    if(material1==1){
        alert("Has elegido las cerdas sintéticas")
    }else if(material1==2){
        alert("Has elegido las cerdas naturales")
    }else{
        alert("Seleccione un material predeterminado")
    }
    opadicional = parseInt(prompt("Selecciona una opción adicional: \n1. Mango largo (+2000) \n2. Gancho en la punta (+500)"))
    if(opadicional==1){
        alert("La opción adicional elegida es el mango largo")
    }else if(opadicional==2){
        alert("La opción adicional elegida es el gancho en la punta")
    }else{
        alert("Por favor, selecciona una opción adicional predeterminada")
    }

    cantidadescobas = parseInt(prompt("Por favor, ingrese la cantidad de escobas que requiere: Min. 3 escobas - Max. 30 escobas"))
    if(cantidadescobas<3 || cantidadescobas>30){
        alert("Seleccione una cantidad de escobas predeterminada")}
        if(cantidadescobas>=3 || cantidadescobas<=30){
            alert(`La cantidad de escobas seleccionada es: ${cantidadescobas}`)
            
    }
    break;
    case(2):
    alert("Has elegido la escoba suave")
    if(material1==1){
        alert("Has elegido las cerdas sintéticas")
    }else if(material1==2){
        alert("Has elegido las cerdas naturales")
    }else{
        alert("Seleccione un material predeterminado")
    }
    opadicional = parseInt(prompt("Selecciona una opción adicional: \n1. Mango largo (+2000) \n2. Gancho en la punta (+500)"))
    if(opadicional==1){
        alert("La opción adicional elegida es el mango largo")
    }else if(opadicional==2){
        alert("La opción adicional elegida es el gancho en la punta")
    }else{
        alert("Por favor, selecciona una opción adicional predeterminada")
    }

    cantidadescobas = parseInt(prompt("Por favor, ingrese la cantidad de escobas que requiere: Min. 3 escobas - Max. 30 escobas"))
    if(cantidadescobas<3 || cantidadescobas>30){
        alert("Seleccione una cantidad de escobas predeterminada")}
        if(cantidadescobas>=3 || cantidadescobas<=30){
            alert(`La cantidad de escobas seleccionada es: ${cantidadescobas}`)
            
    }
    alert("Has elegido la escoba suave")
    break;

    case(3):
    alert("Has elegido el cepillo")
    if(material1==1){
        alert("Has elegido las cerdas sintéticas")
    }else if(material1==2){
        alert("Has elegido las cerdas naturales")
    }else{
        alert("Seleccione un material predeterminado")
    }
    opadicional = parseInt(prompt("Selecciona una opción adicional: \n1. Mango largo (+2000) \n2. Gancho en la punta (+500)"))
    if(opadicional==1){
        alert("La opción adicional elegida es el mango largo")
    }else if(opadicional==2){
        alert("La opción adicional elegida es el gancho en la punta")
    }else{
        alert("Por favor, selecciona una opción adicional predeterminada")
    }

    cantidadescobas = parseInt(prompt("Por favor, ingrese la cantidad de escobas que requiere: Min. 3 escobas - Max. 30 escobas"))
    if(cantidadescobas<3 || cantidadescobas>30){
        alert("Seleccione una cantidad de escobas predeterminada")}
        if(cantidadescobas>=3 || cantidadescobas<=30){
            alert(`La cantidad de escobas seleccionada es: ${cantidadescobas}`)
            
    }
    break;


    default:
        alert("Por favor, seleccione un tipo de escoba predeterminada")
}