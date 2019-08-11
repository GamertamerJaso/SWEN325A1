import { Injectable } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// var firebaseConfig = {
//   apiKey: 'AIzaSyAyiDc5HDx-RT9Qu4etJZjWC4Oy7q_SFhg',
//   authDomain: 'colemajasoswen325a1.firebaseapp.com',
//   databaseURL: 'https://colemajasoswen325a1.firebaseio.com',
//   projectId: 'colemajasoswen325a1',
//   storageBucket: 'colemajasoswen325a1.appspot.com',
//   messagingSenderId: '589738794630',
//   appId: '1:589738794630:web:a486cf18fcab2b5a'
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public loggedIn: boolean=false;
  
  constructor() {}

  // private afAuth: AngularFireAuth

  // verify() {
  //   console.log('yeet');
  //   this.afAuth.authState.subscribe(data => {
  //     if (data && data.email && data.uid) {
  //       console.log('successful login');
  //     } else {
  //       console.log('yut');
  //     }
  //   });
  // }

  // logIn(email: any, password: any) {
  //   try {
  //     const result = this.afAuth.auth.signInWithEmailAndPassword(email, password);
  //     console.log(result);
  //     if (result) {
  //       this.verify();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // doLogin(email, password) {
  //   console.log('attempting to login');
  //   return new Promise<any>((resolve, reject) => {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then(res => resolve(res), err => reject(err));
  //   });
  // }

  loginUser(email, password): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((newUserCredential: firebase.auth.UserCredential) => {
        firebase
          .firestore()
          .doc(`/userProfile/${newUserCredential.user.uid}`)
          .set({ email });
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  resetPassword(email:string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
}
