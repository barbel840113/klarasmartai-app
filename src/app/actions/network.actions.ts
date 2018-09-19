import { Action } from '@ngrx/store';

export enum NetworkActionTypes {
  LoadNetworks = '[Network] Load Networks'
}

export class LoadNetworks implements Action {
  readonly type = NetworkActionTypes.LoadNetworks;
}

export type NetworkActions = LoadNetworks;
