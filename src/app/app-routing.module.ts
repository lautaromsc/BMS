import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandejaComponent } from './bandeja/bandeja.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: MainNavComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bandeja', component: BandejaComponent },

  { path: 'MainNavComponent', component: MainNavComponent },
  { path: 'bandeja', component: BandejaComponent },

  { path: 'navBar', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
