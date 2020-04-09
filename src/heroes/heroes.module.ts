import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { ENTITY_METADATA_TOKEN, PLURAL_NAMES_TOKEN } from "@ngrx/data";
import { EffectsModule } from "@ngrx/effects";
import { HeroesEffects } from "./heroes.effects";
import { reducer } from "./reducers/heroes.reducer";
@NgModule({
  declarations: [],
  imports: [CommonModule, EffectsModule.forFeature([HeroesEffects])],
  providers: [
    {
      provide: ENTITY_METADATA_TOKEN,
      multi: true,
      useValue: {
        hero: {},
      },
    },
    {
      provide: PLURAL_NAMES_TOKEN,
      multi: true,
      useValue: {
        hero: "hero",
      },
    },
  ],
})
export class HeroesModule {}
