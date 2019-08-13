import { Injectable, DoBootstrap } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public loggedIn: boolean = false;
  db;
  user;
  firstName=[];
  lastName=[];
  email=[];
  login;
  signup;

  constructor() {
    this.db = firebase.firestore();
  }

  getCurrentUser() {
    this.firstName=[];
    this.lastName=[];
    this.email=[];
    let path = '/userProfile/' + this.user.user.uid;
    firebase.firestore().doc(path).get().then(snapshot => {
      this.firstName.push(snapshot.data().firstName);
      this.lastName.push(snapshot.data().lastName);
      this.email.push(snapshot.data().email);
    });
  }
 
  loginUser(email, password): Promise<firebase.auth.UserCredential> {
    this.login = firebase.auth().signInWithEmailAndPassword(email, password);
    this.login.then((newUserCredentials: firebase.auth.UserCredential)=>{
      this.user=newUserCredentials;
    });
    return this.login;
  }

  signupUser(firstName:string, lastName:string, email: string, password: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((newUserCredential: firebase.auth.UserCredential) => {
        this.user=newUserCredential;
        firebase.firestore().doc(`/userProfile/${newUserCredential.user.uid}`).set({ firstName, lastName, email });
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  getDatabase(name: string) {
    return this.db.collection(name).doc('Answer');
  }
}
