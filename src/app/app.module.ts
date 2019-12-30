import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainNavComponent } from './componentes/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule, MatButtonModule, MatTabsModule } from '@angular/material/';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ChartistModule } from 'ng-chartist'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './modules/dashboard/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    ChartistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
