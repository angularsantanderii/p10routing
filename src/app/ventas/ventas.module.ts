import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';


@NgModule({
  declarations: [
    InicioVentasComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
