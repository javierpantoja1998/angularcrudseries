import { Injectable } from "@angular/core";
import { Observable, raceWith } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Personaje } from "../models/Personaje";


@Injectable()
export class PersonajesService {

  constructor(private _http:HttpClient){}

  getPersonajes(id:number): Observable<any>{
    var request = "api/Personajes/" + id;
    var url = environment.urlSeries + request;
    return this._http.get(url);
  }

  insertPersonaje(personaje:Personaje): Observable<any>{
        //Convertimos nuestro objeto model a json con stringify
        var json = JSON.stringify(personaje);
        console.log(json)
        //Debemos indicar el tipo de objeto a enviar en la peticion en el header
        var header = new HttpHeaders().set("Content-type", "application/json");
        var request = "api/Personajes";
        var url = environment.urlSeries + request;
        //Al post se le envian tres parametros -> url,objeto a enviar y el header con el tipo de objeto
        return this._http.post(url,json, {headers:header});
  }

  getAllPersonajes(): Observable<any>{
    var request = "api/Personajes";
    var url = environment.urlSeries + request;
    return this._http.get(url);
  }

  modificarPersonaje(idPersonaje:number,idSerie:number){
    var header = new HttpHeaders().set("Content-type", "application/json");
    var request = "api/Personajes/"+ idPersonaje + "/" + idSerie;
    var url = environment.urlSeries + request;
    return this._http.put(url,{headers:header});

  }
}
