import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { BussinesInteligenceComponent } from './bussines-inteligence/bussines-inteligence.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
     { path: 'stats', component: StatsComponent },
     { path: 'bi', component: BussinesInteligenceComponent },
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
