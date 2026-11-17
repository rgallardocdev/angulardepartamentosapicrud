import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-delete-routing-departamento-component',
  standalone: false,
  styleUrl: './delete-routing-departamento-component.css',
  templateUrl: './delete-routing-departamento-component.html',
})
export class DeleteRoutingDepartamentoComponent implements OnInit {

  mensajeProceso!: string;

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let _id = params['id'];
      this.mensajeProceso = "Dato recibido: " + _id;
      this._cdr.detectChanges();
  }

}
