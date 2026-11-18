import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { miDepartamento } from "../models/departamento";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()

export class miServiceDepartamentos{

    constructor(
        private _http: HttpClient
    ){}

    getSaludo(): string{
        return "Pagina de APIs (GET, PUSH, PUT, DELETE)";
    }

    async getDepartamentosAsync(): Promise<miDepartamento[]>{
        let request = "api/departamentos";
        let ruta = environment.apiejemplos + request;
        let response = await firstValueFrom(this._http.get<miDepartamento[]>(ruta));
        return response;
    }

    //Insert
    async postDepartamentoAsync(_dpto: miDepartamento): Promise<any>{
        let request = "api/departamentos";
        let ruta = environment.apiejemplos + request;
        let header = new HttpHeaders().set("content-type","application/json");
        let response = await firstValueFrom(this._http.post(ruta,_dpto, {headers: header}));
        return response;
    }

    //Modificar
    async putDepartamentoAsync(_dpto: miDepartamento): Promise<any>{
        let request = "api/departamentos";
        let ruta = environment.apiejemplos + request;
        let header = new HttpHeaders().set("content-type","application/json");
        let response = await firstValueFrom(this._http.put(ruta,_dpto, {headers:header}));
        return response;
    }

    //Delete
    async deleteDepartamentoAsync(_id: number): Promise<any>{
        let request = "api/departamentos/" + _id;
        let ruta = environment.apiejemplos + request;
        let response = await firstValueFrom(this._http.delete(ruta));
        return response;
    }
    
}