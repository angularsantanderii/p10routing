import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoNoAutorizadoComponent } from './acceso-no-autorizado/acceso-no-autorizado.component';
import { AccesoRolesGuard } from './acceso-roles.guard';
import { InicioComponent } from './inicio/inicio.component';
import { HelpComponent } from './soporte/help.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'soporte', component: HelpComponent},
  {
    path: 'ventas',
    loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule),
    canActivate: [AccesoRolesGuard]
  },
  {path: 'acceso-no-autorizado', component: AccesoNoAutorizadoComponent},
  {path: 'sales', redirectTo: 'ventas'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
