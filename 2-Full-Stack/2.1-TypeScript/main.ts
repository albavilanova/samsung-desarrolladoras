import { Persona } from './persona.js';
import { Direccion } from './direccion.js';
import { Telefono } from './telefono.js';
import { Mail } from './mail.js';

// Crear instancias
console.log('CREANDO REGISTROS...')
var MartaGomezOlivera = new Persona("Marta", "Gómez Olivera", 23, "30279910P", 
                                    new Date("2023-02-20-02"), "Rojo", "Mujer",
                                    [new Direccion('Calle Valero', 21, 2, 'A', 29002, 'Málaga', 'Málaga')], 
                                    [new Telefono('Móvil', 623778228)], [new Mail('Personal', 'marta.gomez@gmail.com')], 
                                    "");
var SergioPintoOrtega = new Persona("Sergio", "Pinto Ortega", 32, "45737285A", 
                                    new Date("1989-01-03"), "Verde", "Hombre",
                                    [new Direccion('Avinguda de les Garrigues', 54, 4, 'A', 25001, 'Lleida', 'Lleida')], 
                                    [new Telefono('Casa', 644025467)], [new Mail('Personal', 'sergio.pinto@gmail.com')], 
                                    "");
var MireiaGonzalezNavarro = new Persona("Mireia", "Gónzalez Navarro", 47, "98224312T", 
                                        new Date("1975-10-22"), "Azul", "Mujer",
                                        [new Direccion('Calle Alta', 84, 3, 'B', 39010, 'Santander', 'Santander')], 
                                        [new Telefono('Móvil', 684202236)],
                                        [new Mail('Personal', 'mireia.gonzalez@gmail.com')], "");

// Imprimir registros
console.log('MOSTRANDO REGISTROS...')
const personas = [MartaGomezOlivera, SergioPintoOrtega, MireiaGonzalezNavarro]
const parametros = ["Nombre", "Apellidos", "Edad", "DNI", "Nacimiento", "Color", "Sexo", "Direccion", "Telefono", 
                    "Mail", "Notas"]
personas.forEach((persona, index) => {
    console.log("RESULTADO " + index)
    parametros.forEach((parametro) => {
        let obtenerParametro: string = "get" + parametro;
        let resultado: string = JSON.stringify((persona as any)[obtenerParametro]());
        console.log(parametro + ": " + resultado);
    })
});

// Cambiar dirección, mail y teléfono de un registro e imprimir información
const DNI: string = "30279910P"
console.log('CAMBIANDO REGISTRO CON DNI ' + DNI + '...')
personas.forEach((persona) => {
    if ( persona.DNI === DNI ) {
        console.log('El DNI ' + DNI + ' corresponde a ' + persona.nombre + ' ' + persona.apellidos);

        // Imprimir datos antes del cambio
        console.log('ANTES');
        console.log('Dirección: ' + JSON.stringify(persona.getDireccion()));
        console.log('Teléfono: ' + JSON.stringify(persona.getMail()));
        console.log('Mail: ' + JSON.stringify(persona.getTelefono()));

        // Cambiar datos
        persona.setDireccion([new Direccion('Calle Álamos', 38, 3, 'A', 29012, 'Málaga', 'Málaga')]);
        persona.setTelefono([new Telefono('Móvil', 621884320)]);
        persona.setMail([new Mail('Personal', 'marta.gomez@outlook.com')]);

        // Imprimir datos después del cambio
        console.log('DESPUÉS');
        console.log('Dirección: ' + JSON.stringify(persona.getDireccion()));
        console.log('Teléfono: ' + JSON.stringify(persona.getMail()));
        console.log('Mail: ' + JSON.stringify(persona.getTelefono()));
    }
});

