import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

import {ChatAdapterService} from '../services/chat-adapter.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  public infoForm: FormGroup;
  private subscription: Subscription;
  constructor(
      private fb: FormBuilder, private chatAdapterService: ChatAdapterService) {
  }

  ngOnInit() {
    this.infoForm = this.fb.group({message: ['']});
    this.listenToMessageChanges();
    this.chatAdapterService.initialize('https://localhost:8000/chat.io');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private listenToMessageChanges(): void {
    this.subscription = this.messageControl.valueChanges.subscribe((msg) => {
      this.chatAdapterService.userTyping();
    });
  }

  public sendMessage() {
    this.chatAdapterService.sendMessage(this.message);
  }

  private get message(): string {
    return this.messageControl.value;
  }

  private get messageControl(): AbstractControl {
    return this.infoForm.get('message');
  }
}
