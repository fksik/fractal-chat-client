import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {connect} from 'socket.io-client';

@Injectable()
export class ChatAdapterService {
  public $messageStack: ReplaySubject<any> = new ReplaySubject<any>(1);
  private socket: SocketIOClient.Socket;
  private socketConnectionEstablished = (() => {
    this.socket.on('event', this.eventOccured);
  });
  private eventOccured = ((name: string, eventOccured: any): any => {
    console.log(name);
  });

  constructor() {}

  initilize(url: string) {
    this.socket = connect(url, {path: '/sock.io'});
    this.socket.on('connect', this.socketConnectionEstablished);
  }

  sendMessage(message: string): void {
    throw new Error('Method not implemented.');
  }
}
