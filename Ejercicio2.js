
const matricula = 7000000
const porcentaje = 0.05
const completo = (matricula*porcentaje)
const descuento = (matricula-completo)

let doscuotas = (matricula/2)
let interesito = matricula*0.02
let cuota2 = (doscuotas+interesito)

let trescuotas = (matricula/3)
let interesito2 = matricula*0.02
let interes2 = (trescuotas+interesito2)



let opciondepago = parseInt(prompt("Seleccione el tipo de pago: \n1. Pago completo (5% descuento) \n2. Pago en 2 cuotas \n3. Pago en 3 cuotas"));

switch(opciondepago){
    case(1):
    alert("Ha elegido el pago completo");
    alert(`Su pago con descuento es: ${descuento}`);
    break;
    case(2):
    alert("Ha elegido el pago a dos cuotas")
    alert(`Su pago a dos cuotas más interes del 2% es igual a: ${cuota2}`);
    break;
    case(3):
    alert("Ha elegido el pago a tres cuotas")
    alert(`Su pago a tres cuotas más interes del 2% es igual a: ${interes2}`);
    break;
    default:
        alert("Por favor, seleccione uno de los tres métodos de pago");
}