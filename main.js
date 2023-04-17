
//VARIABLES, CONDICIONALES, CICLOS, FUNCIONES

let marcaAuto = prompt("Ingrese la marca de su auto");
let anioAuto = Number (prompt("Ingrese el año modelo de su auto"));
let versionesToyotaDisponibles = "Corolla, Yaris y Hilux"
let versionesPeugeotDisponibles = "208, 2008 y Partner"

function avisarDisponibilidad(Disponibilidad, Versiones) {
    alert(Disponibilidad + ` tenemos accesorios para su ${marcaAuto}` + Versiones);
}


if (((marcaAuto == "toyota") || (marcaAuto == "Toyota") || (marcaAuto == "TOYOTA")) && (anioAuto >= 2007)) {
    avisarDisponibilidad ("Si" , `, en las versiones ${versionesToyotaDisponibles}`)
    console.log("El usuario tiene un vehiculo marca " + marcaAuto + ", Año modelo " + anioAuto + ".")
    while (anioAuto < 2024) {
        console.log(`Tenemos accesorios para Toyota ${versionesToyotaDisponibles}, Año Modelo ${anioAuto}.`);
        anioAuto ++;
    }
} else if (((marcaAuto == "peugeot") || (marcaAuto == "Peugeot") || (marcaAuto == "PEUGEOT")) && (anioAuto >= 2012)) {
    avisarDisponibilidad ("Si" , `, en las versiones ${versionesPeugeotDisponibles}`)
    console.log("El usuario tiene un vehiculo marca " + marcaAuto + ", Año modelo " + anioAuto + ".")
    for (anioAuto; anioAuto < 2024; anioAuto++) {
        console.log(`Tenemos accesorios para Peugeot ${versionesPeugeotDisponibles}, Año Modelo ${anioAuto}.`);
    }
} else {
    avisarDisponibilidad ("No" , " o Año Modelo solicitado")
    console.log("El usuario ingreso una marca o año modelo que no vendemos")
}




// VARIABLES Y OPERACIONES MATEMATICAS

let tipoCambioOficial = prompt("Ingrese el tipo de cambio oficial sin impuestos");
let dolarColdplay = tipoCambioOficial * 1.3;
let dolarAgro = tipoCambioOficial * 1.35;
let dolarSolidario = tipoCambioOficial * 1.65;
let dolarNetflix = tipoCambioOficial * 1.75;
let dolarQatar = tipoCambioOficial * 2;

alert (`
    El dolar Coldplay cotiza a $${dolarColdplay}
    El dolar Agro cotiza a $${dolarAgro}
    El dolar Solidario cotiza a $${dolarSolidario}
    El dolar Netflix cotiza a $${dolarNetflix}
    El dolar Qatar cotiza a $${dolarQatar}
    `)









