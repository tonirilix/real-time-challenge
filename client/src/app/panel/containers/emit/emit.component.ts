import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { concatMap, delay, flatMap } from 'rxjs/operators';
import { AsyncService } from '@app-root/panel/async-services/base.async-service';
import { Sender } from '@app-root/panel/async-services/sender.async-service';
import { UserModel } from '@app-root/panel/models/user.model';
import { GeolocationService } from '@app-root/panel/services/geolocation.service';
import { AuthService } from '@app-root/auth/services/auth.service';

@Component({
  selector: 'app-emit',
  templateUrl: './emit.component.html',
  styleUrls: ['./emit.component.scss'],
  providers: [
    { provide: AsyncService, multi: true, useClass: Sender },
    UserModel
  ]
})
export class EmitComponent implements OnInit {
  user;
  currentLocation$: Observable<{latitude: number, longitude: number}>;
  constructor(
    private _model: UserModel, 
    private _geolocationService: GeolocationService,
    private _authService: AuthService
  ) {
    this.user = this._authService.UserData;
    this.currentLocation$ = this._geolocationService.simulateLocation$();
    this.currentLocation$.subscribe((data) => this._model.onProgress(data));
  }

  ngOnInit() {
  }

}
