import { Injectable, Inject, InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';

import { Gateway } from '../gateways/base.gateway';
import { DeepStreamService, IDeepstreamQuarantine } from '../services/deep-stream.service';

export interface WebSocketGatewayConfig {
    port: number;
    host: string;
}

export const WS_CONFIG = new InjectionToken<WebSocketGatewayConfig>('ws-config');

@Injectable()
export class WebSocketGateway extends Gateway<any> {
    private _endpoint: string;
    private _ws: IDeepstreamQuarantine;
    private _connected = false;
    private _reconnectTimeout: any;

    constructor(@Inject(WS_CONFIG) private config: WebSocketGatewayConfig) {
        super();
        this._endpoint = `${config.host}:${config.port}`;
        this._createConnection();
    }

    send(data: any) {
        // Send if connected & drop all others
        // TODO: buffer the input
        if (this._connected) {
            this._ws.event.emit('test-event', data);
        }
        return Observable.create();
    }

    _createConnection() {
        if (this._reconnectTimeout) {
            return;
        }
        this._ws = new DeepStreamService(this._endpoint).dsInstance;
        this._ws.login((success) => {
            if (success) {
                this._connected = true;
                this.connectionEvents.next(true);
            }
        });

        this._ws.on('error', () => {
            this._connected = false;
            this.connectionEvents.next(true);
            this._reconnectTimeout = setTimeout(() => {
                this._createConnection();
            }, 2000);
        });

        this._ws.event.subscribe('test-event', (data) => {
            this.dataStream.next(data);
        });
    }
}
