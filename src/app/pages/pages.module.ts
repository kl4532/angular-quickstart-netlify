import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ComponentsModule} from "../components/components.module";
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
