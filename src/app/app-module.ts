import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeDepartamentosComponent } from './components/home-departamentos-component/home-departamentos-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { miServiceDepartamentos } from './services/service.departamentos';
import { CreateDepartamentoComponent } from './components/create-departamento-component/create-departamento-component';
import { DeleteDepartamentoComponent } from './components/delete-departamento-component/delete-departamento-component';
import { DeleteRoutingDepartamentoComponent } from './components/delete-routing-departamento-component/delete-routing-departamento-component';

@NgModule({
  declarations: [
    App,
    HomeDepartamentosComponent,
    MenuComponent,
    CreateDepartamentoComponent,
    DeleteDepartamentoComponent,
    DeleteRoutingDepartamentoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), miServiceDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
