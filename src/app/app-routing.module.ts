import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { ShapesComponent } from './shapes/shapes.component';
import { StoreComponent } from './store/store.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{
  path:"home",
  component:CalculatorComponent
},
// {
//   path:"",
//   component:CalculatorComponent
// },
{
  path:"test",
  component:TestComponent
},
{
  path:"registration",
  component:StoreComponent
},
{
  path:"shapes",
  component:ShapesComponent
},
{
  path:"productentry",
  component:ProductentryComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
