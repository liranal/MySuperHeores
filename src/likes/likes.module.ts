import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ENTITY_METADATA_TOKEN } from "@ngrx/data";
import { from } from "rxjs";
import { PLURAL_NAMES_TOKEN } from "@ngrx/data";
import { EffectsModule } from "@ngrx/effects";
import { LikesEffects } from "./likes.effects";

@NgModule({
  declarations: [],
  imports: [CommonModule, EffectsModule.forFeature([LikesEffects])],
  providers: [
    { provide: ENTITY_METADATA_TOKEN, multi: true, useValue: { like: {} } },
    {
      provide: PLURAL_NAMES_TOKEN,
      multi: true,
      useValue: { like: "hero/like" }
    }
  ]
})
export class LikesModule {}
