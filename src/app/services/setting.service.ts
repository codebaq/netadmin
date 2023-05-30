import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, setDoc} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private firestore : Firestore) { }

  ImportBD(users : any){
    const BDUserRef = collection(this.firestore, 'users')
    const {id} = doc(BDUserRef)
    users.REFID = id 
    let Referenciaid = id    
   // return addDoc(BDUserRef, users )
    return setDoc(doc(BDUserRef, Referenciaid), users)
  }
}
