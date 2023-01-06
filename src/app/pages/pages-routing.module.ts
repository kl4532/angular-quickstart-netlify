import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [{
      path: ':slug',
      component: AboutComponent,
    }]
  },
  {
    path: 'blog',
    component: BlogComponent,
    children: [{
      path: ':slug',
      component: BlogComponent,
    }]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
