import { TestBed } from '@angular/core/testing';

import { BookRoomService } from './book-room.service';

describe('BookRoomService', () => {
  let service: BookRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
