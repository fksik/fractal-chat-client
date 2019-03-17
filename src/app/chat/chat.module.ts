import {CommonModule} from '@angular/common';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {ReactiveFormsModule} from '@angular/forms';

import {ChatComponent} from './chat/chat.component';
import { ChatStackComponent } from './chat-stack/chat-stack.component';
import { ChatDescriptionComponent } from './chat-description/chat-description.component';

@NgModule({
  declarations: [ChatComponent, ChatStackComponent, ChatDescriptionComponent],
  imports: [CommonModule, ReactiveFormsModule],
  entryComponents: [ChatComponent]
})
export class ChatModule {
  constructor(injector: Injector) {
    const elm = createCustomElement(ChatComponent, {injector});
    customElements.define('app-chat', elm);
  }
}
