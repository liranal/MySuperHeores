import { Injectable } from "@angular/core";
import { Actions, Effect, OnInitEffects, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { mergeMap } from "rxjs/operators";
import {
  EntityCollectionServiceFactory,
  EntityCollectionService
} from "@ngrx/data";
import { Like } from "./like";
@Injectable()
export class LikesEffects implements OnInitEffects {
  private _likeService: EntityCollectionService<Like>;

  @Effect({ dispatch: false })
  initLikes$ = this.actions$.pipe(
    ofType("INIT_LIKES"),
    mergeMap(() => this._likeService.getAll())
  );

  ngrxOnInitEffects(): Action {
    return { type: "INIT_LIKES" };
  }

  constructor(
    private actions$: Actions,
    serviceFactory: EntityCollectionServiceFactory
  ) {
    this._likeService = serviceFactory.create("like");
  }
}
