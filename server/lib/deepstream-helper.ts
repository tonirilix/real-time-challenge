import * as deepstream from 'deepstream.io-client-js';
import { config } from '../config';

export const login = () => deepstream(config.deepstream.url).login();
export const logout = (ds: deepstreamIO.Client) => ds.close();

export const emit = (ds: deepstreamIO.Client, eventName: string, data: any) => {
    if (!ds) throw Error('Login into deepstream!');
    ds.event.emit(eventName, data);
};