import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatStackComponent } from './chat-stack.component';

describe('ChatStackComponent', () => {
  let component: ChatStackComponent;
  let fixture: ComponentFixture<ChatStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
