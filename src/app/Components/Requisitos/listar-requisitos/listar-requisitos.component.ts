import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-requisitos',
  templateUrl: './listar-requisitos.component.html',
  styleUrls: ['./listar-requisitos.component.css']
})
export class ListarRequisitosComponent {
  public requirements: any[] = [
    { id: 1, name: 'Requisito 1', description: 'Descripción del requisito 1', mandatory: true, state: true },
    { id: 2, name: 'Requisito 2', description: 'Descripción del requisito 2', mandatory: true, state: false },
    { id: 3, name: 'Requisito 3', description: 'Descripción del requisito 3', mandatory: false, state: true },
  ];

}
