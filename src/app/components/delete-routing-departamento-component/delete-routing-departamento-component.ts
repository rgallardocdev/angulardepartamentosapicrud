import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { miServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-delete-routing-departamento-component',
  standalone: false,
  styleUrl: './delete-routing-departamento-component.css',
  templateUrl: './delete-routing-departamento-component.html',
})
export class DeleteRoutingDepartamentoComponent implements OnInit {

  mensajeProcesoRouting!: string;

  _idDepartamento!:number;

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
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

  async borrarRoutingDpto(): Promise<void>{
      let response = await this._service.deleteDepartamentoAsync(this._idDepartamento);
      this.mensajeProcesoRouting = "Dpto. Borrado Routing";
      this._cdr.detectChanges();
  }
  
}
