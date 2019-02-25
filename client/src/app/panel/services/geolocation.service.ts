import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { flatMap, concatMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  simulateLocation$() {
    return of([
      { latitude: 42.352376, longitude: -71.064548 },
      { latitude: 42.353454, longitude: -71.064184 },
      { latitude: 42.354707, longitude: -71.063647 },
      { latitude: 42.355785, longitude: -71.062768 },
      { latitude: 42.356483, longitude: -71.062016 },
      { latitude: 42.357069, longitude: -71.062660 },
      { latitude: 42.357672, longitude: -71.063261 },
      { latitude: 42.357164, longitude: -71.064978 },
      { latitude: 42.356768, longitude: -71.066844 },
      { latitude: 42.356213, longitude: -71.069334 },
      { latitude: 42.355832, longitude: -71.070921 },
      { latitude: 42.355452, longitude: -71.072509 },
      { latitude: 42.353517, longitude: -71.071479 },
      { latitude: 42.351947, longitude: -71.070685 },
      { latitude: 42.352566, longitude: -71.067595 },
      { latitude: 42.352344, longitude: -71.064591 }
    ])
      .pipe(
        flatMap((x) => x),
        concatMap(x => of(x)
          .pipe(
            delay(2000))
        )
      );
  }
}
