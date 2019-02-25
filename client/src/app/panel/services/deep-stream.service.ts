import { Injectable } from '@angular/core';
import { environment } from '.././../../environments/environment';
declare const deepstream; // : deepstreamIO.deepstreamStatic;

export interface EventStatic {
  subscribe(event: string, callback: (data: any) => void): void;
  /** Unsubscribes from an event that was previously registered with subscribe(). This stops a client from receiving the event. */
  unsubscribe(event: string, callback: (data: any) => void): void;
  /** Sends the event to all subscribed clients */
  emit(event: string, data: any): void;
}

export interface IDeepstreamQuarantine {
  event: EventStatic;
  login(authParams?: {}, callback?: (success: boolean, data: any) => void): any;
  login(callback: (success: boolean, data: any) => void): any;
  on(type: string, callback: (error: string, ...args: Array<any>) => void): void;
}

export class DeepStreamService {
  private readonly _ds: IDeepstreamQuarantine; // : deepstreamIO.deepstreamQuarantine;

  constructor(private endpoint: string) {
    this._ds = deepstream(endpoint);
  }

  get dsInstance(): IDeepstreamQuarantine {
    return this._ds;
  }
}
