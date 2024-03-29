import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: any = {
    nombre: '',
    cif: '',
    localidad: '',
    id: Math.random().toString().slice(-4) // No lo haga en casa :)
  }

  constructor(private clientesService: ClientesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addCliente(): void {
    this.clientesService.setCliente(this.cliente);
    this.router.navigate(['/ventas/tabla-clientes']);
  }

}
