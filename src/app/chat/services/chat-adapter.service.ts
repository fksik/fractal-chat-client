import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { connect } from 'socket.io-client';
import { User } from '../interfaces/user';
import { ChatEvents } from '../constants/chat.events';
import { Conversation } from '../interfaces/conversation';

@Injectable()
export class ChatAdapterService {
  private user: User | null = null;
  private conversation: Conversation;
  public $messageStack: ReplaySubject<any> = new ReplaySubject<any>(1);
  private socket: SocketIOClient.Socket;
  private socketConnectionEstablished = (() => {
    this.socket.on(ChatEvents.USER_REGISTERED, this.userRegistered);
    this.socket.on(ChatEvents.CONVERSATION_CREATED, this.newConversation);
    this.socket.on(ChatEvents.RECEIVE_MESSAGE, this.messageReceived);
    if (this.user._id && this.conversation._id) {
      this.sendMessage(undefined, true);
    }
  });
  private userRegistered = ((user: User): any => {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  });
  private messageReceived = ((message: any) => {
    console.log(message);
  });
  private newConversation = ((conversation: Conversation) => {
    localStorage.setItem('conversation', JSON.stringify(conversation));
    this.conversation = conversation;
  });

  constructor() { }

  initialize(url: string) {
    this.socket = connect(
      url,
      { path: '/sock.io' }
    );
    this.socket.on('connect', this.socketConnectionEstablished);
    this.user = JSON.parse(localStorage.getItem('user'));
    this.conversation = JSON.parse(localStorage.getItem('conversation'));
  }

  sendMessage(message: string, requestHistory = false): void {
    this.socket.emit(
      ChatEvents.SEND_MESSAGE,
      { userId: this.user ? this.user._id : null, conversationId: this.conversation ? this.conversation._id : null, requestHistory },
      { content: message, sentOn: (new Date()).getTime() }
    );
  }

  userTyping(): any {
    this.socket.emit(ChatEvents.USER_TYPING, {});
  }
}
