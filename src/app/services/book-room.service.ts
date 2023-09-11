import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { BookRoom } from '../models/book-room.model';

@Injectable({
  providedIn: 'root'
})
export class BookRoomService {

  private dbPath = '/book-room';

  roomsRef: AngularFireList<BookRoom>;

  constructor(private db: AngularFireDatabase) {
    this.roomsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<BookRoom> {
    return this.roomsRef;
  }

  create(room: BookRoom): any {
    return this.roomsRef.push(room);
  }

  update(key: string, value: any): Promise<void> {
    return this.roomsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.roomsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.roomsRef.remove();
  }
}
