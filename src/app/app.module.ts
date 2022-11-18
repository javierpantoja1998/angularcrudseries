import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenurutasComponent } from './components/menurutas/menurutas.component';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from 'src/app/app.routing';
import {HttpClientModule} from '@angular/common/http';
import { SeriesService } from './services/series.service';
import { DetalleserieComponent } from './components/detalleserie/detalleserie.component';
import { DetallepersonajesComponent } from './components/detallepersonajes/detallepersonajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenurutasComponent,
    DetalleserieComponent,
    DetallepersonajesComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,routing
  ],
  providers: [appRoutingProviders,SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
