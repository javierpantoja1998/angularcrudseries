import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Serie } from 'src/app/models/Serie';
import { Personaje } from 'src/app/models/Personaje';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})




export class ModificarpersonajeComponent implements OnInit {

  public series !: Array<Serie>;
  public personajes !: Array<Personaje>;

  public personaje !: Personaje;

  @ViewChild("selectserie") selectSerie!:ElementRef;
  @ViewChild("selectpersonaje") selectPersonaje!:ElementRef;

  constructor(
    private _service:SeriesService,
    private _services:PersonajesService,
    private _activeRoute:ActivatedRoute,
    private _router:Router
  ) { }

  loadSeries(){
    this._service.getSeries().subscribe(res=>{
      this.series = res;
    });
  }

  loadPersonajes(){
    this._services.getAllPersonajes().subscribe(res=>{
      this.personajes = res;
    });
  }

  updatePersonaje():void{
    var idPersonaje = this.selectPersonaje.nativeElement.value;
    var idSerie = this.selectSerie.nativeElement.value;
    this._services.modificarPersonaje(idPersonaje,idSerie).subscribe(res=>{
      console.log("MODIFICADO!!!");
      this._router.navigate(['/']);
    });
  }
  ngOnInit(): void {
    this.loadSeries();
    this.loadPersonajes();
    //////////////////////

  }

}
