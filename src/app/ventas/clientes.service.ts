import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root' // Establecemos el contexto del servicio en el módulo Ventas
// }) // para limitar este servicio a este módulo

export class ClientesService {

  private clientes: Array<any> = [
    {id: 'dfhdgf', nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao'},
    {id: 'gafsd5', nombre: 'Jazztel', cif: 'A87654321', localidad: 'Madrid'},
    {id: 'hcdgs4', nombre: 'La Caixa', cif: 'A4444444', localidad: 'Barcelona'},
  ]

  constructor() { }

  getClientes(): Array<any> {
    return this.clientes;
  }

  getClienteById(id: string): any {
    return this.clientes.find(elem => elem.id === id);
  }

}
