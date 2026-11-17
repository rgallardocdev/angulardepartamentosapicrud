import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miServiceDepartamentos } from '../../services/service.departamentos';
import { miDepartamento } from '../../models/departamento';

@Component({
  selector: 'app-delete-departamento-component',
  standalone: false,
  styleUrl: './delete-departamento-component.css',
  templateUrl: './delete-departamento-component.html',
})
export class DeleteDepartamentoComponent{

  @ViewChild("cajaid") _cajaid!: ElementRef;

  _dpto!: miDepartamento;

  mensajeProceso!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: miServiceDepartamentos
  ){}

  async borrarDpto(): Promise<void>{
    let _id = this._cajaid.nativeElement.value;
    let response = await this._service.deleteDepartamentoAsync(_id);
    this.mensajeProceso = "Dpto. Borrado";
    this._cdr.detectChanges();
  }
}
