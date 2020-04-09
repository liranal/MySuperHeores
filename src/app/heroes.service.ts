import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  public heroesObserver: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {}

  getHeroes() {
    this.http
      .get<any>("https://liran-heroes-api.herokuapp.com/api/hero")
      .subscribe(data => {
        this.heroesObserver.next(data);
      });
  }
}
