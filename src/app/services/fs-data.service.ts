import { Injectable } from '@angular/core';
import { Firestore, collectionData, query, where } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FsDataService {

  constructor(private fs: Firestore) { }

  getData(data: any, db: string) {
    const collectionInstance = collection(this.fs, db);
    collectionData(collectionInstance, { idField: 'id' })
    .subscribe(val => {
      console.log(val);
    })
    data = collectionData(collectionInstance, { idField: 'id' });
  }

  addData(f: any, db: string) {
    const collectionInstance = collection(this.fs, db);
    addDoc(collectionInstance, f.value).then(() => {
      console.log('Data saved successfully');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  updateData(id: string, db: string) {
    const docInstance = doc(this.fs, db, id);
    const updateData = {
      firstName: 'updatedFirstName'
    }
    updateDoc(docInstance, updateData)
    .then(() => {
      console.log('Data updated');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  deleteData(id: string, db: string) {
    const docInstance = doc(this.fs, db, id);
    deleteDoc(docInstance)
    .then(() => {
      console.log('Data deleted');
    })
  }
}