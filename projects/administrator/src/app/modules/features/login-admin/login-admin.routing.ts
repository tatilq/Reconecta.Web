import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
 // { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent }
];

export const HomeRoutes = RouterModule.forChild(routes);
