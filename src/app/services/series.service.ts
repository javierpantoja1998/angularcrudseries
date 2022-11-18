import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Serie } from "../models/Serie";

@Injectable()
export class SeriesService {
  constructor(private _http:HttpClient){}

  getSeries(): Observable<any>{
    var request = "api/Series";
    var url = environment.urlSeries + request;
    return this._http.get(url);
  }

  getSerie(id:number): Observable<any>{
    var request = "api/Series/" + id;
    var url = environment.urlSeries + request;
    return this._http.get(url);
  }
}
