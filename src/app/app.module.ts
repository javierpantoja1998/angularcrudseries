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
import { PersonajesService } from './services/personajes.service';
import { InsertarpersonajeComponent } from './components/insertarpersonaje/insertarpersonaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenurutasComponent,
    DetalleserieComponent,
    DetallepersonajesComponent,
    InsertarpersonajeComponent,
    ModificarpersonajeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,routing
  ],
  providers: [appRoutingProviders,SeriesService,PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
