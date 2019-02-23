import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { RestfulGateway } from '../gateways/restful.gateway';
import { AsyncService } from './base.async-service';
import { ReportLocation } from '../actions/location.action';

// For command builder take a look at
// +multi-player async-services
@Injectable()
export class Sender extends AsyncService {
  constructor(private restfulGateway: RestfulGateway) {
    super();
  }
  process(data: ReportLocation) {
    return this.restfulGateway.send(data.payload);
  }
}
