import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDescriptionComponent } from './chat-description.component';

describe('ChatDescriptionComponent', () => {
  let component: ChatDescriptionComponent;
  let fixture: ComponentFixture<ChatDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
