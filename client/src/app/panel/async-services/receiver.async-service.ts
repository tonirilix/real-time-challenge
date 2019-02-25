import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { RestfulGateway } from '../gateways/restful.gateway';
import { AsyncService } from './base.async-service';
import { ReportLocation } from '../actions/location.action';
import { WebSocketGateway } from '../gateways/websocket.gateway';

// For command builder take a look at
// +multi-player async-services
@Injectable()
export class Receiver extends AsyncService {
  constructor(private websocketGateway: WebSocketGateway) {
    super();
    websocketGateway.dataStream.subscribe(() => console.log(''));
  }
  process(data: ReportLocation) {
    return this.websocketGateway.send(data.payload);
  }
}
