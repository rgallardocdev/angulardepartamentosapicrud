import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params } from '@angular/router';
import { miDepartamento } from '../../models/departamento';

@Component({
  selector: 'app-update-routing-departamento-component',
  standalone: false,
  styleUrl: './update-routing-departamento-component.css',
  templateUrl: './update-routing-departamento-component.html',
})
export class UpdateRoutingDepartamentoComponent implements OnInit {

  @ViewChild("cajanombre") _cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") _cajalocalidad!: ElementRef;

  _dpto!: miDepartamento;

  mensajeProcesoRouting!: string;
  mensajeProcesoModificar!: string;

  _idDepartamento!: number;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _active: ActivatedRoute,
    private _service: miServiceDepartamentos
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let _id = params['id'];
      this._idDepartamento = _id;
      this.mensajeProcesoRouting = "Dpto. recibido: " + _id;
      this._cdr.detectChanges();
    })    
  }

  async modificarDpto(): Promise<void>{
    let _nombre = this._cajanombre.nativeElement.value;
    let _localidad = this._cajalocalidad.nativeElement.value;
    let _dpto = new miDepartamento(this._idDepartamento,_nombre,_localidad);
    let response = await this._service.putDepartamentoAsync(_dpto);
    this.mensajeProcesoModificar = "Dpto. modificado: " + this._idDepartamento;
    this._cdr.detectChanges();
  }

}
