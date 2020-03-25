import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuntoDeVentaRoutingModule } from './punto-de-venta-routing.module';


import { PuntoDeVentaComponent } from './punto-de-venta.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { ProductosComponent } from './productos/productos.component';



import { MatToolbarModule, MatButtonModule, } from '@angular/material/';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './menu/menu.component';
import { NgbTypeaheadModule, NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PuntoDeVentaComponent, VentasComponent, ComprasComponent, ProductosComponent, MenuComponent],
  imports: [
    CommonModule,
    PuntoDeVentaRoutingModule,
    MatToolbarModule,MatButtonModule,MatSidenavModule,MatIconModule,MatListModule,
    
    NgbTypeaheadModule,
    NgbDatepickerModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PuntoDeVentaModule { }
