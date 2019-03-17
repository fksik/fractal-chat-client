import { TestBed } from '@angular/core/testing';

import { ChatAdapterService } from './chat-adapter.service';

describe('ChatAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatAdapterService = TestBed.get(ChatAdapterService);
    expect(service).toBeTruthy();
  });
});
