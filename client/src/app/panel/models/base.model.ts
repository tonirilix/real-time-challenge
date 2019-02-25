import { Observable, merge } from 'rxjs';
import { Action } from '@ngrx/store';
import { AsyncService } from '../async-services/base.async-service';

export abstract class Model {
    constructor(private services: AsyncService[]) { }
    protected performAsyncAction(action: Action) {
        return merge.apply(Observable, (this.services || []).map(s => s.process(action)));
    }
}
