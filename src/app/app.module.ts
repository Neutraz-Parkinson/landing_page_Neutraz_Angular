import { NgModule,HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './layouts/landing-layout/inicio/inicio.component';
import { ContactoComponent } from './layouts/landing-layout/contacto/contacto.component';
import { NosotrosComponent } from './layouts/landing-layout/nosotros/nosotros.component';
import { ProductosComponent } from './layouts/landing-layout/productos/productos.component';
import { AppRoutingModule } from './app-routing.module';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    ProductosComponent,
    PanelLayoutComponent,
    LandingLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
