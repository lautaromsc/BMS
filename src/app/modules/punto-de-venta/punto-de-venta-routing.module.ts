import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntoDeVentaComponent } from './punto-de-venta.component';
import { VentasComponent } from './ventas/ventas.component'
import { ComprasComponent } from './compras/compras.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
     path: '', component: PuntoDeVentaComponent,
     children: [
      { path: 'ventas', component: VentasComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'compras', component: ComprasComponent },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntoDeVentaRoutingModule { }
