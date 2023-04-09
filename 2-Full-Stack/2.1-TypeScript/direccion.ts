export class Direccion {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigo_postal: number;
    poblacion: string;
    provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string,
                codigo_postal: number, poblacion: string, provincia: string) {
                    
                    this.calle = calle;
                    this.numero = numero;
                    this.piso = piso;
                    this.letra = letra;
                    this.codigo_postal = codigo_postal;
                    this.poblacion = poblacion;
                    this.provincia = provincia;

        }

    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string): void {
        this.calle = calle;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getPiso(): number {
        return this.piso;
    }

    public setPiso(piso: number): void {
        this.piso = piso;
    }

    public getLetra(): string {
        return this.letra;
    }

    public setLetra(letra: string): void {
        this.letra = letra;
    }

    public getCodigoPostal(): number {
        return this.codigo_postal;
    }

    public setCodigoPostal(codigo_postal: number): void {
        this.codigo_postal = codigo_postal;
    }

    public getPoblacion(): string {
        return this.poblacion;
    }

    public setPoblacion(poblacion: string): void {
        this.poblacion = poblacion;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setProvincia(provincia: string): void {
        this.provincia = provincia;
    }
}
