import { Injectable } from "@angular/core";
import { Actions, Effect, OnInitEffects, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import {
  EntityCollectionServiceFactory,
  EntityCollectionService
} from "@ngrx/data";
import { Hero } from "./hero";
import { mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class HeroesEffects implements OnInitEffects {
  private _heroService: EntityCollectionService<Hero>;

  @Effect({ dispatch: false })
  initHeroes$: Observable<Hero[]> = this.actions$.pipe(
    ofType("INIT_HEROES"),
    mergeMap(() => {
      return this._heroService.getAll();
    })
  );

  ngrxOnInitEffects(): Action {
    return {
      type: "INIT_HEROES"
    };
  }
  constructor(
    private actions$: Actions,
    serviceFactory: EntityCollectionServiceFactory
  ) {
    this._heroService = serviceFactory.create("hero");
  }
}
