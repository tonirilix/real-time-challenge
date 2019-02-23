import { Inject, Injectable, Optional } from '@angular/core';

import { AsyncService } from '../async-services/base.async-service';
import { Model } from './base.model';
import { ReportLocation } from '../actions/location.action';

@Injectable()
export class UserModel extends Model {
    constructor(
        @Optional() @Inject(AsyncService) services: AsyncService[]) {
        super(services || []);
    }

    onProgress(data: any) {
        this.performAsyncAction(new ReportLocation(data))
            .subscribe(() => {
                // Do nothing, we're all good
            }, () => {
                console.log('Finish Reporting');
            });
    }
}
