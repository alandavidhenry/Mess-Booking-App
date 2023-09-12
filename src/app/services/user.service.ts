import { Injectable } from '@angular/core';
import { Firestore, collectionData  } from '@angular/fire/firestore';
import { collection, doc, addDoc, deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: Firestore) { }

  getUsers() {
    const usersCollection = collection(this.fs, 'users');
    return collectionData(usersCollection, { idField: 'id' });
  }

  addUser(email: string, password: string) {
    const data = { email: email, password: password };
    const usersCollection = collection(this.fs, 'users');
    return addDoc(usersCollection, data);
  }

  deleteUser(id: string) {
    const decRef = doc(this.fs, 'users/'+id);
    return deleteDoc(decRef);
  }
  
}
