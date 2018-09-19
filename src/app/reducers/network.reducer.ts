import { Action } from '@ngrx/store';
import { NetworkActions, NetworkActionTypes } from '../actions/network.actions';

export interface State {
  typeNetwork : any
}

export const initialState: State = {
  typeNetwork : null
};

export function reducer(state = initialState, action: NetworkActions): State {
  switch (action.type) {

    case NetworkActionTypes.LoadNetworks:
      return state;


    default:
      return state;
  }
}
