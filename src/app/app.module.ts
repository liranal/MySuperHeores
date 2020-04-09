import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";
import { HeroComponent } from "./hero/hero.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeroesService } from "./heroes.service";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { EntityDataModule } from "@ngrx/data";
import { entityConfig } from "./entity-metadata";
import { reducers, metaReducers } from "./reducers";
import { AppEffects } from "./app.effects";
import { HeroesModule } from "../heroes/heroes.module";
import { DefaultDataServiceConfig } from "@ngrx/data";
import { LikesModule } from "src/likes/likes.module";
@NgModule({
  declarations: [AppComponent, HeroesListComponent, HeroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot(entityConfig),
    HeroesModule,
    LikesModule
  ],
  providers: [
    HeroesService,
    {
      provide: DefaultDataServiceConfig,
      useValue: { root: "https://liran-heroes-api.herokuapp.com/api" }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
