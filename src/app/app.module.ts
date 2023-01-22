import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarRequisitosComponent } from './Components/Requisitos/listar-requisitos/listar-requisitos.component';
import { RequisitosComponent } from './Components/NuevoRequisito/requisitos/requisitos.component';

import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {PaginatorModule} from 'primeng/paginator';
import { RegistroVentanillaComponent } from './Components/registro-ventanilla/registro-ventanilla.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarRequisitosComponent,
    RequisitosComponent,
    RegistroVentanillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CheckboxModule,
    InputTextModule,
    BrowserAnimationsModule,
    FormsModule,
    PaginatorModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
