import { NgModule,HostListener, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';




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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
