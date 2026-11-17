import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDepartamentosComponent } from './components/home-departamentos-component/home-departamentos-component';
import { CreateDepartamentoComponent } from './components/create-departamento-component/create-departamento-component';
import { DeleteDepartamentoComponent } from './components/delete-departamento-component/delete-departamento-component';
import { DeleteRoutingDepartamentoComponent } from './components/delete-routing-departamento-component/delete-routing-departamento-component';


const routes: Routes = [
  {path:"", component: HomeDepartamentosComponent},
  {path:"createdepartamento", component: CreateDepartamentoComponent},
  {path:"deletedepartamento", component: DeleteDepartamentoComponent},
  {path:"deleteroutingdepartamento/:id", component: DeleteRoutingDepartamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
