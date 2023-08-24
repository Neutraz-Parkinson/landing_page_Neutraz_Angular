import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './layouts/landing-layout/inicio/inicio.component';
import { NosotrosComponent } from './layouts/landing-layout/nosotros/nosotros.component';
import { ProductosComponent } from './layouts/landing-layout/productos/productos.component';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { ContactoComponent } from './layouts/landing-layout/contacto/contacto.component';

const appRoutes: Routes = [

  {
    path: '',
    component: LandingLayoutComponent, // Componente de layout para "landing"
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    ],
  },
  {
    path: 'panel',
    component: PanelLayoutComponent, // Componente de layout para "panel"
    children: [
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'settings', component: SettingsComponent },
      // otras rutas de "panel" aquí
    ],
  },
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ]
})
export class AppRoutingModule { }
