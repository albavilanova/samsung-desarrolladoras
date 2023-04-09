"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    Mail.prototype.setNumero = function (direccion) {
        this.direccion = direccion;
    };
    return Mail;
}());
exports.Mail = Mail;
