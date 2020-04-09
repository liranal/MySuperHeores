import { Action, createReducer, on } from "@ngrx/store";
import { clickedHero } from "../actions/heroes.actions";

export const heroesFeatureKey = "hero";

export interface State {
  hero: number;
}

export const initialState: State = {
  hero: null,
};

const heroesReducer = createReducer(
  initialState,
  on(clickedHero, (state, action) => ({ ...state, [action.id]: action.id }))
);

export function reducer(state: State | undefined, action: Action) {
  return heroesReducer(state, action);
}
