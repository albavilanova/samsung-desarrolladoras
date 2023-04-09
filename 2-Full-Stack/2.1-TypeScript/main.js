"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_js_1 = require("./persona.js");
var direccion_js_1 = require("./direccion.js");
var telefono_js_1 = require("./telefono.js");
var mail_js_1 = require("./mail.js");
// Crear instancias
console.log('CREANDO REGISTROS...');
var MartaGomezOlivera = new persona_js_1.Persona("Marta", "Gómez Olivera", 23, "30279910P", new Date("2023-02-20-02"), "Rojo", "Mujer", [new direccion_js_1.Direccion('Calle Valero', 21, 2, 'A', 29002, 'Málaga', 'Málaga')], [new telefono_js_1.Telefono('Móvil', 623778228)], [new mail_js_1.Mail('Personal', 'marta.gomez@gmail.com')], "");
var SergioPintoOrtega = new persona_js_1.Persona("Sergio", "Pinto Ortega", 32, "45737285A", new Date("1989-01-03"), "Verde", "Hombre", [new direccion_js_1.Direccion('Avinguda de les Garrigues', 54, 4, 'A', 25001, 'Lleida', 'Lleida')], [new telefono_js_1.Telefono('Casa', 644025467)], [new mail_js_1.Mail('Personal', 'sergio.pinto@gmail.com')], "");
var MireiaGonzalezNavarro = new persona_js_1.Persona("Mireia", "Gónzalez Navarro", 47, "98224312T", new Date("1975-10-22"), "Azul", "Mujer", [new direccion_js_1.Direccion('Calle Alta', 84, 3, 'B', 39010, 'Santander', 'Santander')], [new telefono_js_1.Telefono('Móvil', 684202236)], [new mail_js_1.Mail('Personal', 'mireia.gonzalez@gmail.com')], "");
// Imprimir registros
console.log('MOSTRANDO REGISTROS...');
var personas = [MartaGomezOlivera, SergioPintoOrtega, MireiaGonzalezNavarro];
var parametros = ["Nombre", "Apellidos", "Edad", "DNI", "Nacimiento", "Color", "Sexo", "Direccion", "Telefono",
    "Mail", "Notas"];
personas.forEach(function (persona, index) {
    console.log("RESULTADO " + index);
    parametros.forEach(function (parametro) {
        var obtenerParametro = "get" + parametro;
        var resultado = JSON.stringify(persona[obtenerParametro]());
        console.log(parametro + ": " + resultado);
    });
});
// Cambiar dirección, mail y teléfono de un registro e imprimir información
var DNI = "30279910P";
console.log('CAMBIANDO REGISTRO CON DNI ' + DNI + '...');
personas.forEach(function (persona) {
    if (persona.DNI === DNI) {
        console.log('El DNI ' + DNI + ' corresponde a ' + persona.nombre + ' ' + persona.apellidos);
        // Imprimir datos antes del cambio
        console.log('ANTES');
        console.log('Dirección: ' + JSON.stringify(persona.direccion));
        console.log('Teléfono: ' + JSON.stringify(persona.mail));
        console.log('Mail: ' + JSON.stringify(persona.telefono));
        // Cambiar datos
        persona.setDireccion([new direccion_js_1.Direccion('Calle Álamos', 38, 3, 'A', 29012, 'Málaga', 'Málaga')]);
        persona.setTelefono([new telefono_js_1.Telefono('Móvil', 621884320)]);
        persona.setMail([new mail_js_1.Mail('Personal', 'marta.gomez@outlook.com')]);
        // Imprimir datos después del cambio
        console.log('DESPUÉS');
        console.log('Dirección: ' + JSON.stringify(persona.direccion));
        console.log('Teléfono: ' + JSON.stringify(persona.mail));
        console.log('Mail: ' + JSON.stringify(persona.telefono));
    }
});
