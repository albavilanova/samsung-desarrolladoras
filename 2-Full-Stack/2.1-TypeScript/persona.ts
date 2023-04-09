import { Direccion } from './direccion.js';
import { Telefono } from './telefono.js';
import { Mail } from './mail.js';

export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    DNI: string;
    fecha_nacimiento: Date;
    color: string;
    sexo: string;
    direccion: Array<Direccion>;
    telefono: Array<Telefono>;
    mail: Array<Mail>;
    notas: string;
    
    constructor(nombre: string, apellidos: string, edad: number, DNI: string,
                fecha_nacimiento: Date, color: string, sexo: string,
                direccion: Array<Direccion>, telefono: Array<Telefono>,
                mail: Array<Mail>, notas: string) {
                    
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

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getDNI(): string {
        return this.DNI;
    }

    public setDNI(DNI: string): void {
        this.DNI = DNI;
    }

    public getNacimiento(): Date {
        return this.fecha_nacimiento;
    }

    public setNacimiento(fecha_nacimiento: Date): void {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }

    public getDireccion(): string {
        var direccion_params = [this.direccion[0].getCalle(), this.direccion[0].getNumero(), 
                                this.direccion[0].getPiso(), this.direccion[0].getLetra(), 
                                this.direccion[0].getCodigoPostal(), this.direccion[0].getPoblacion(),
                                this.direccion[0].getProvincia()];
        var direccion_str = direccion_params.join(', ');
        return direccion_str;
    }

    public setDireccion(direccion: Array<Direccion>): void {
        this.direccion = direccion;
    }

    public getTelefono(): string {
        var telefono_params = [this.telefono[0].getTipo(), this.telefono[0].getNumero()];
        var telefono_str = telefono_params.join(' - ');
        return telefono_str;
    }

    public setTelefono(telefono: Array<Telefono>): void {
        this.telefono = telefono;
    }

    public getMail(): string {
        var mail_params = [this.mail[0].getTipo(), this.mail[0].getDireccion()];
        var mail_str = mail_params.join(' - ');
        return mail_str;
    }

    public setMail(mail: Array<Mail>): void {
        this.mail = mail;
    }

    public getNotas(): string {
        return this.notas;
    }

    public setNotas(notas: string): void {
        this.notas = notas;
    }
}
