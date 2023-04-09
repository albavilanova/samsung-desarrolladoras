"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, DNI, fecha_nacimiento, color, sexo, direccion, telefono, mail, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.DNI = DNI;
        this.fecha_nacimiento = fecha_nacimiento;
        this.color = color;
        this.sexo = sexo;
        this.direccion = direccion;
        this.telefono = telefono;
        this.mail = mail;
        this.notas = notas;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getDNI = function () {
        return this.DNI;
    };
    Persona.prototype.setDNI = function (DNI) {
        this.DNI = DNI;
    };
    Persona.prototype.getNacimiento = function () {
        return this.fecha_nacimiento;
    };
    Persona.prototype.setNacimiento = function (fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    };
    Persona.prototype.getColor = function () {
        return this.color;
    };
    Persona.prototype.setColor = function (color) {
        this.color = color;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.getDireccion = function () {
        return Object.values(this.direccion);
        //return this.direccion;
    };
    Persona.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Persona.prototype.getMail = function () {
        return this.mail;
    };
    Persona.prototype.setMail = function (mail) {
        this.mail = mail;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };
    return Persona;
}());
exports.Persona = Persona;
