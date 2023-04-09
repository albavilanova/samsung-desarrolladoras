"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigo_postal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigo_postal = codigo_postal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.setCalle = function (calle) {
        this.calle = calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.setPiso = function (piso) {
        this.piso = piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.setLetra = function (letra) {
        this.letra = letra;
    };
    Direccion.prototype.getCodigoPostal = function () {
        return this.codigo_postal;
    };
    Direccion.prototype.setCodigoPostal = function (codigo_postal) {
        this.codigo_postal = codigo_postal;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.setPoblacion = function (poblacion) {
        this.poblacion = poblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    Direccion.prototype.setProvincia = function (provincia) {
        this.provincia = provincia;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
