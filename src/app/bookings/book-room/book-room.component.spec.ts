import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomComponent } from 'src/app/services/book-room.service';

describe('BookRoomComponent', () => {
  let component: BookRoomComponent;
  let fixture: ComponentFixture<BookRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookRoomComponent]
    });
    fixture = TestBed.createComponent(BookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
