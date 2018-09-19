import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NetworkActionTypes } from '../actions/network.actions';

@Injectable()
export class NetworkEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(NetworkActionTypes.LoadNetworks));

  constructor(private actions$: Actions) {}
}
