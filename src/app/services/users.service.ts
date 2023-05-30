import { Injectable } from '@angular/core';
import { collection, getDocs, Firestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  AllUSers : any = []
  constructor(private firestore :  Firestore) { }

  GetAllUsers(){
    const BDUserRef = collection(this.firestore, 'users')
    return getDocs(BDUserRef)
  }
}
