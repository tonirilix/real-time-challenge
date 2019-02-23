import { Component, OnInit } from '@angular/core';
import { DeepStreamService } from '@app-root/panel/services/deep-stream.service';
import { UserModel } from '@app-root/panel/models/user.model';
import { AsyncService } from '@app-root/panel/async-services/base.async-service';
import { Sender } from '@app-root/panel/async-services/sender.async-service';
import { Receiver } from '@app-root/panel/async-services/receiver.async-service';
import { WebSocketGateway } from '@app-root/panel/gateways/websocket.gateway';
import { share } from 'rxjs/operators';
import { AuthService } from '@app-root/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [
    { provide: AsyncService, multi: true, useClass: Receiver },
    UserModel
  ]
})
export class ReportComponent implements OnInit {
  dataStream$;
  constructor(
    private _model: UserModel,
    private gateway: WebSocketGateway,
    ) {
    this.dataStream$ = this.gateway.dataStream.pipe(share());
    this.dataStream$.subscribe((d) => console.log(d));
  }

  ngOnInit() {
  }

}
