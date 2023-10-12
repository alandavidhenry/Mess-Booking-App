import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Room } from 'src/app/models/room.model'
 
@Injectable({
 providedIn: 'root'
})
export class RoomService {
 private url = 'http://localhost:5200';
 private rooms$: Subject<Room[]> = new Subject();
 
 constructor(private httpClient: HttpClient) { }
 
 private refreshRooms() {
   this.httpClient.get<Room[]>(`${this.url}/rooms`)
     .subscribe(rooms => {
       this.rooms$.next(rooms);
     });
 }
 
 getRooms(): Subject<Room[]> {
   this.refreshRooms();
   return this.rooms$;
 }
 
 getRoom(id: string): Observable<Room> {
   return this.httpClient.get<Room>(`${this.url}/rooms/${id}`);
 }
 
 createRoom(room: Room): Observable<string> {
   return this.httpClient.post(`${this.url}/rooms`, room, { responseType: 'text' });
 }
 
 updateRoom(id: string, room: Room): Observable<string> {
   return this.httpClient.put(`${this.url}/rooms/${id}`, room, { responseType: 'text' });
 }
 
 deleteRoom(id: string): Observable<string> {
   return this.httpClient.delete(`${this.url}/rooms/${id}`, { responseType: 'text' });
 }
}