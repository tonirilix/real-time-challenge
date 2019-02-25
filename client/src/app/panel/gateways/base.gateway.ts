import { Observable, Observer, Subject } from 'rxjs';
import { share } from 'rxjs/operators';

export abstract class Gateway<T> {
    dataStream: Subject<any>;
    connectionEvents: Subject<boolean>;

    constructor() {
      this.dataStream = new Subject();
      this.connectionEvents = new Subject();
    }

    abstract send(data: T): Observable<any>;
}
