import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BandejaComponent } from './bandeja/bandeja.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'MainNavComponent', component: MainNavComponent },
  { path: 'home',             component: HomeComponent },
  //{ path: 'ventas',           component: BandejaComponent },
  
  { path: 'pos', loadChildren: () => import('./modules/punto-de-venta/punto-de-venta.module').then(m => m.PuntoDeVentaModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
