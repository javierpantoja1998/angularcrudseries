import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personaje } from 'src/app/models/Personaje';
import { Serie } from 'src/app/models/Serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertarpersonaje',
  templateUrl: './insertarpersonaje.component.html',
  styleUrls: ['./insertarpersonaje.component.css']
})
export class InsertarpersonajeComponent implements OnInit {

  @ViewChild("cajanombre") cajaNombre!:ElementRef;
  @ViewChild("cajaimagen") cajaImagen!:ElementRef;
  @ViewChild("selectserie") selectSerie!:ElementRef;

  public series !: Array<Serie>;


  constructor(
    private _service:SeriesService,
    private _services:PersonajesService,
    private _router:Router
    ) { }

  insertarPersonaje(){
    var idPersonaje = 0;
    var nom = this.cajaNombre.nativeElement.value;
    var imagen = this.cajaImagen.nativeElement.value;
    var serie = parseInt(this.selectSerie.nativeElement.value);
    var newPersonaje = new Personaje(idPersonaje,nom,imagen,serie)
    this._services.insertPersonaje(newPersonaje).subscribe(res=>{

      console.log("Insertado");
      this._router.navigate(["/"]);
    });
  }

  loadSeries(){
    this._service.getSeries().subscribe(res=>{
      this.series = res
    });
  }



  ngOnInit(): void {
    this.loadSeries();
  }



}
