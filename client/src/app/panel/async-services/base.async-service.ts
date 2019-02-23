import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';

export abstract class AsyncService {
    abstract process(data: Action): Observable<any>;
}
