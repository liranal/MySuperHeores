import { createAction, props } from "@ngrx/store";

export const clickedHero = createAction(
  "[Heroes]  Clicked Hero",
  props<{ id: number }>()
);
