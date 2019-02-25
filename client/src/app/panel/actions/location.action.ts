import { Action } from '@ngrx/store';

export enum LocationActionTypes {
    ReportLocation = '[Panel] Report Location'
}

export class ReportLocation implements Action {
    readonly type = LocationActionTypes.ReportLocation;

    constructor(public payload: any) { }
}
