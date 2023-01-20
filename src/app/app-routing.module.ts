import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisitosComponent } from './Components/NuevoRequisito/requisitos/requisitos.component';
import { ListarRequisitosComponent } from './Components/Requisitos/listar-requisitos/listar-requisitos.component';

const routes: Routes = [
  {path:'NuevoRequisito',component:RequisitosComponent},
  {path:'ListarNuevoRequisito',component:ListarRequisitosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
