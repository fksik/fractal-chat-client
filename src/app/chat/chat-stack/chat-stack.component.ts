import {Component, OnInit} from '@angular/core';
import {ChatAdapterService} from '../services/chat-adapter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-stack',
  templateUrl: './chat-stack.component.html',
  styleUrls: ['./chat-stack.component.scss']
})
export class ChatStackComponent implements OnInit {
  constructor(private chatAdapterSerice: ChatAdapterService) {}

  ngOnInit() {}

  get chatStack(): Observable<any> {
    return this.chatAdapterSerice.$messageStack;
  }
}
