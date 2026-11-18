import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miServiceDepartamentos } from '../../services/service.departamentos';
import { miDepartamento } from '../../models/departamento';

@Component({
  selector: 'app-home-departamentos-component',
  standalone: false,
  styleUrl: './home-departamentos-component.css',
  templateUrl: './home-departamentos-component.html',
})
export class HomeDepartamentosComponent implements OnInit {

  mensajeSaludo!: string;

  arrayDepartamentos: miDepartamento[];

  constructor(
    private _service: miServiceDepartamentos,
    private _cdr: ChangeDetectorRef
  ){
    this.arrayDepartamentos = [];
  }

  async ngOnInit(): Promise<void> {
    this.mensajeSaludo = this._service.getSaludo();
    this.arrayDepartamentos = await this._service.getDepartamentosAsync();
    console.log(this.arrayDepartamentos);
    this._cdr.detectChanges();
  }
}
