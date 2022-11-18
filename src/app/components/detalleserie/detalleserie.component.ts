import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Serie } from 'src/app/models/Serie';
import { Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalleserie',
  templateUrl: './detalleserie.component.html',
  styleUrls: ['./detalleserie.component.css']
})
export class DetalleserieComponent implements OnInit {

  public serie !: Serie;

  constructor(
    private _service:SeriesService,
    private _activeRoute:ActivatedRoute,

  ) { }

  loadSerie(){
    this._activeRoute.params.subscribe((params:Params)=>{
      var id = parseInt(params['id']);
      this._service.getSerie(id).subscribe(res=>{
        this.serie = res
      });
    });
  }
  ngOnInit(): void {
    this.loadSerie();
  }

}
