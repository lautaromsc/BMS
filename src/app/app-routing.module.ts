import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainNavComponent } from './componentes/main-nav/main-nav.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'MainNavComponent', component: MainNavComponent },
  { path: 'pos', loadChildren: () => import('./modules/punto-de-venta/punto-de-venta.module').then(m => m.PuntoDeVentaModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
