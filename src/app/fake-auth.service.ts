import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private usuario = { // Vendría de web service de autenticación
    nombre: 'Pilar',
    rol: 'ventas'
  }

  constructor() { }

  hasVentasAccess(): boolean {
    return this.usuario.rol === 'ventas';
  }

}
