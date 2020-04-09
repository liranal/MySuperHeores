import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../heroes.service";
import { NgxSpinnerService } from "ngx-spinner";
import {
  EntityCollectionServiceFactory,
  EntityCollectionService,
} from "@ngrx/data";
import { Hero } from "src/heroes/hero";
import { Store, select } from "@ngrx/store";
import { map } from "rxjs/operators";
import { Dictionary } from "@ngrx/entity";
import { Observable } from "rxjs";
@Component({
  selector: "app-heroes-list",
  templateUrl: "./heroes-list.component.html",
  styleUrls: ["./heroes-list.component.css"],
})
export class HeroesListComponent implements OnInit {
  private _page: number = 1;
  heroes$: Observable<Hero[]> = this._store.pipe(
    select("entityCache", "hero", "entities"),
    map((heroes: Dictionary<Hero>) => {
      const heroArray: Hero[] = [];
      for (let hero of Object.values(heroes)) {
        console.log("");
        heroArray.push(hero);
      }
      this.SpinnerService.hide();
      return heroArray;
    })
  );
  //private _heroesService: EntityCollectionService<Hero>;

  constructor(
    private utils: HeroesService,
    private SpinnerService: NgxSpinnerService, //private serviceFactory: EntityCollectionServiceFactory
    private _store: Store<any>
  ) {}
  ngOnInit() {}

  heroClicked() {
    console.log("hero");
  }
}
