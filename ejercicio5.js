
//TARIFAS POR DÍA
const bestseller = 500 //por día
const literatura = 100 //por día
const académico = 0 //PRESTAMO GRATUITO
const descuento = 0.01

let categoria = parseInt(prompt("Seleccione una categoría para su libro: \n1. Bestseller (novedades) \n2. Literatura \n3. Académicos"))

if(categoria==1){
    alert("Has elegido la categoría bestseller")
    cantidadlibro = parseInt(prompt("Por favor, ingrese la cantidad de libros que desea (1-5)"))
    if(cantidadlibro>1 && cantidadlibro>5){
        alert("Por favor, selecccione una cantidad de libros dentro del rango")
    }else{
        alert(`La cantidad de libros deseados: ${cantidadlibro}`)
    }
    prestamo = parseInt(prompt("Por favor, indique el tiempo de préstamo para su libro (1-30 días)"))
    if(prestamo >=1 && prestamo >30){
        alert("Por favor, indique un tiempo de préstamo predeterminado")
    }else{
        alert(`La cantidad de días deseados para el préstamo es de: ${prestamo}`)
    }
    
}else if(categoria==2){
    alert("Has elegido la categoría de literatura")
}else if(categoria==3){
    alert("Has elegido la categoría de libros académicos")
}else{
    alert("Por favor, elija una categoría predeterminada")
}


