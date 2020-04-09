import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LikesEffects } from './likes.effects';

describe('LikesEffects', () => {
  let actions$: Observable<any>;
  let effects: LikesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LikesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LikesEffects>(LikesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
