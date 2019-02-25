import { Inject, Injectable, Optional } from '@angular/core';

import { AsyncService } from '../async-services/base.async-service';
import { Model } from './base.model';
import { ReportLocation } from '../actions/location.action';

@Injectable()
export class AdminModel extends Model {
    constructor(
        @Optional() @Inject(AsyncService) services: AsyncService[]) {
        super(services || []);
    }
}
