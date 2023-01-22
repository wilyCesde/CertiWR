import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-ventanilla',
  templateUrl: './registro-ventanilla.component.html',
  styleUrls: ['./registro-ventanilla.component.css']
})
export class RegistroVentanillaComponent {

students: any[] = [
  {programaAcademico: 'Ingeniería de Sistemas', entregaDiploma: 'Si', medioEntregaDiploma: 'Ceremonia', fechaEntrega: '10/05/2022', horaEntrega: '10:00 am'},
  {programaAcademico: 'Ingeniería Civil', entregaDiploma: 'No', medioEntregaDiploma: 'Ventanilla', fechaEntrega: '12/05/2022', horaEntrega: '11:00 am'},
  {programaAcademico: 'Derecho', entregaDiploma: 'Si', medioEntregaDiploma: 'Ceremonia', fechaEntrega: '15/05/2022', horaEntrega: '09:00 am'},
];

}
