import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Serie } from 'src/app/models/Serie';

@Component({
  selector: 'app-menurutas',
  templateUrl: './menurutas.component.html',
  styleUrls: ['./menurutas.component.css']
})

export class MenurutasComponent implements OnInit {

  public series !: Array<Serie>

  constructor(private _service:SeriesService) { }

  loadSeries(){
    this._service.getSeries().subscribe(res=>{
      this.series = res
    });
  }

  ngOnInit(): void {
    this.loadSeries();
  }

}
