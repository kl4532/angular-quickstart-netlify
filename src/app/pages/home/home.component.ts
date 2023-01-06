import { Component, OnInit } from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public blogPosts$: Observable<any> | undefined;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    this.blogPosts$ = this.scully.available$.pipe(
      tap((routes: ScullyRoute[]) => {
        console.log('routes', routes)
      }),
      map((routes: ScullyRoute[]) => {
        return routes.filter((r: ScullyRoute) => {
          return r.route.startsWith(`/about/`);
        });
      }),
    );
    // this.blogPosts$.subscribe();
  }
}
