import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntoDeVentaComponent } from './punto-de-venta.component';
import { VentasComponent } from './ventas/ventas.component'

const routes: Routes = [
  { path: '', component: PuntoDeVentaComponent },

  { path: 'ventas', component: VentasComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntoDeVentaRoutingModule { }
