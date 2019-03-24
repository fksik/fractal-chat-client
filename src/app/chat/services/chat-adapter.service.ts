import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { connect } from 'socket.io-client';
import { User } from '../interfaces/user';
import { ChatEvents } from '../constants/chat.events';

@Injectable()
export class ChatAdapterService {
  private user: User | null = null;
  public $messageStack: ReplaySubject<any> = new ReplaySubject<any>(1);
  private socket: SocketIOClient.Socket;
  private socketConnectionEstablished = (() => {
    this.socket.on(ChatEvents.USER_REGISTERED, this.userRegistered);
    this.socket.on(ChatEvents.RECEIVE_MESSAGE, this.messageReceived);
  });
  private userRegistered = ((user: User): any => {
    console.log(user)
    localStorage.setItem('0', JSON.stringify(user));
    this.user = user;
  });
  messageReceived: ((message: any) => {

  });

  constructor() { }

  initialize(url: string) {
    this.socket = connect(
      url,
      { path: '/sock.io' }
    );
    this.socket.on('connect', this.socketConnectionEstablished);
  }

  sendMessage(message: string, requestHistory = false): void {
    this.socket.emit(
      ChatEvents.SEND_MESSAGE,
      { userId: this.user ? this.user._id : null, requestHistory, conversationId: null },
      [{ content: message }]
    );
  }

  userTyping(): any {
    this.socket.emit(ChatEvents.USER_TYPING, {});
  }
}
