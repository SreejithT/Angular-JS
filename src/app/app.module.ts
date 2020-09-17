import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProductentryComponent } from './productentry/productentry.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ShapesComponent } from './shapes/shapes.component';
import { StoreComponent } from './store/store.component';
import { ProductlistComponent } from './productlist/productlist.component'

@NgModule({     //decorator[@NgModule()] is checked at compile time not at executuion time
  declarations: [   //metadata - data in a module
    AppComponent, TestComponent, CalculatorComponent, TodoComponent, ProductentryComponent, NameEditorComponent, ShapesComponent, StoreComponent, ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
