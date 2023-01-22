import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisitosComponent } from './Components/NuevoRequisito/requisitos/requisitos.component';
import { ListarRequisitosComponent } from './Components/Requisitos/listar-requisitos/listar-requisitos.component';
import { RegistroVentanillaComponent } from './Components/registro-ventanilla/registro-ventanilla.component';

const routes: Routes = [
  {path:'NuevoRequisito',component:RequisitosComponent},
  {path:'ListarNuevoRequisito',component:ListarRequisitosComponent},
  {path:'registroVentanilla',component:RegistroVentanillaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
