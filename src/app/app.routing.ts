import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { DetalleserieComponent } from "./components/detalleserie/detalleserie.component";
import { DetallepersonajesComponent } from "./components/detallepersonajes/detallepersonajes.component";
const appRoutes: Routes = [

  {path:"", component:HomeComponent},
  {path:"serie/:id", component:DetalleserieComponent},
  {path:"personajes/:id", component:DetallepersonajesComponent},
]

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
