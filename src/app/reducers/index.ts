import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user.reducer';
import * as fromNetwork from './network.reducer';


export interface State {

  user: fromUser.State;
  network: fromNetwork.State;
}

export const reducers: ActionReducerMap<State> = {
  
  user: fromUser.reducer,
  
  network: fromNetwork.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
