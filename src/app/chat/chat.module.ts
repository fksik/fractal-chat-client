import {CommonModule} from '@angular/common';
import {Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {ReactiveFormsModule} from '@angular/forms';

import {ChatDescriptionComponent} from './chat-description/chat-description.component';
import {ChatStackComponent} from './chat-stack/chat-stack.component';
import {ChatComponent} from './chat/chat.component';
import {ChatAdapterService} from './services/chat-adapter.service';

@NgModule({
  declarations: [ChatComponent, ChatStackComponent, ChatDescriptionComponent],
  imports: [CommonModule, ReactiveFormsModule],
  entryComponents: [ChatComponent],
  providers: [ChatAdapterService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatModule {
  constructor(injector: Injector) {
    const elm = createCustomElement(ChatComponent, {injector});
    customElements.define('app-chat', elm);
  }
}
