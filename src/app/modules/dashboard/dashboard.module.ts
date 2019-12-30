import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { StatsComponent } from './stats/stats.component';
import { BussinesInteligenceComponent } from './bussines-inteligence/bussines-inteligence.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuDashComponent } from './menu/menu.component';


@NgModule({
  declarations: [DashboardComponent, MenuDashComponent, StatsComponent, BussinesInteligenceComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,


    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule 
  ]
})
export class DashboardModule { }
