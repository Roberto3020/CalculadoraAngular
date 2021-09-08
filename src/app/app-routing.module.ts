import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent}from'../app/components/home/home.component';
import {SumaComponent} from '../app/components/suma/suma.component';
import {RestaComponent} from '../app/components/resta/resta.component';
import { MultiplicacionComponent } from './components/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './components/division/division.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'suma',component:SumaComponent},
  {path:'resta',component:RestaComponent},
  {path:'multiplicacion',component:MultiplicacionComponent},
  {path:'division',component:DivisionComponent},
  { path: '**', pathMatch: 'full',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
