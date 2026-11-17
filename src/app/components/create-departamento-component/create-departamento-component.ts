import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { miServiceDepartamentos } from '../../services/service.departamentos';
import { miDepartamento } from '../../models/departamento';

@Component({
  selector: 'app-create-departamento-component',
  standalone: false,
  styleUrl: './create-departamento-component.css',
  templateUrl: './create-departamento-component.html',
})
export class CreateDepartamentoComponent {

  @ViewChild("cajaid") _cajaid!: ElementRef;
  @ViewChild("cajanombre") _cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") _cajalocalidad!: ElementRef

  mensajeProceso!: string;
  _dpto!: miDepartamento;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: miServiceDepartamentos
  ) { }

  async insertarDpto(): Promise<void>{
    let _id = parseInt(this._cajaid.nativeElement.value);
    let _nombre = this._cajanombre.nativeElement.value;
    let _localidad = this._cajalocalidad.nativeElement.value;

    this._dpto = new miDepartamento(_id,_nombre,_localidad);

    let response = await this._service.postDepartamentoAsync(this._dpto);

    this.mensajeProceso = "Departamento creado";
    this._cdr.detectChanges();
  }

}
