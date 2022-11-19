import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personaje } from 'src/app/models/Personaje';
import { Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detallepersonajes',
  templateUrl: './detallepersonajes.component.html',
  styleUrls: ['./detallepersonajes.component.css']
})
export class DetallepersonajesComponent implements OnInit {

  public personaje !: Personaje;
  constructor(
    private _service:PersonajesService,
    private _activeRoute:ActivatedRoute,
  ) { }

  loadPersonajes(){
    this._activeRoute.params.subscribe((params:Params)=>{
      var id = parseInt(params['id']);
      this._service.getPersonajes(id).subscribe(res=>{
        this.personaje = res
      });
    });
  }

  ngOnInit(): void {
    this.loadPersonajes();
  }

}
