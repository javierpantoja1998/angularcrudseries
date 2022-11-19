import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { DetalleserieComponent } from "./components/detalleserie/detalleserie.component";
import { DetallepersonajesComponent } from "./components/detallepersonajes/detallepersonajes.component";
import { InsertarpersonajeComponent } from "./components/insertarpersonaje/insertarpersonaje.component";
import { ModificarpersonajeComponent } from "./components/modificarpersonaje/modificarpersonaje.component";
const appRoutes: Routes = [

  {path:"", component:HomeComponent},
  {path:"serie/:id", component:DetalleserieComponent},
  {path:"personajes/:id", component:DetallepersonajesComponent},
  {path:"nuevopersonaje", component:InsertarpersonajeComponent},
  {path:"modificarpersonaje", component:ModificarpersonajeComponent}
]

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
