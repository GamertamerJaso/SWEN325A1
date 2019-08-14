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
  l1=[];
  l2=[];
  l3=[];
  l4=[];

  constructor() {
    this.db = firebase.firestore();
  }

  //Gets the current user and sets the users name and email
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
 
  //logins the user by contacting firebase and returns a promise of the created user and sets the user to its credentials
  loginUser(email, password): Promise<firebase.auth.UserCredential> {
    this.login = firebase.auth().signInWithEmailAndPassword(email, password);
    this.login.then((newUserCredentials: firebase.auth.UserCredential)=>{
      this.user=newUserCredentials;
    });
    return this.login;
  }

  //creates a user within firebase
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

  //resets password using firebases authentication
  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  getDatabase(name: string) {
    return this.db.collection(name).doc('Answer');
  }

  getLeaderboard(){
    this.l1=[];
    this.l2=[];
    this.l3=[];
    this.l4=[];
    for(let i=1; i<11; i++){
      firebase.firestore().doc(`/leaderboards/`+i).get().then(snapshot => {
        this.l1.push(snapshot.data().firstName);
        this.l2.push(snapshot.data().lastName);
        this.l3.push(snapshot.data().score);
        this.l4.push(snapshot.data().quiz);
      });
    }
  }

  // uploadToLeaderboard(firstName, lastName, quiz:string, score: number){
  //   this.l1=[];
  //   this.l2=[];
  //   this.l3=[];
  //   this.l4=[];
  //   for(let i=1; i<11; i++){
  //     firebase.firestore().doc(`/leaderboards/`+i).get().then(snapshot => {
  //       this.l1.push(snapshot.data().firstName);
  //       this.l2.push(snapshot.data().lastName);
  //       this.l3.push(snapshot.data().score);
  //       this.l4.push(snapshot.data().quiz);
  //     if(this.l3[i-1]<score){
  //       firebase.firestore().doc(`/leaderboards/`+(i)).set({ firstName, lastName, quiz, score });
  //       break;
  //     }
  //     });
  //   }
  // }
  clearFirst(index, firstName, lastName, quiz:string, score: number){
    this.l1=[];
    this.l2=[];
    this.l3=[];
    this.l4=[];
    this.uploadToLeaderboard(index, firstName, lastName, quiz, score);
  }

  // moveDown(index, score){
  //   for(let i=9; index<i; i--){
  //   firebase.firestore().doc(`/leaderboards/`+i).get().then(snapshot => {
  //     let firstName = snapshot.data().firstName;
  //     let lastName = snapshot.data().lastName;
  //     let score = snapshot.data().score;
  //     let quiz = snapshot.data().quiz;
  //     console.log(i);
  //     firebase.firestore().doc(`/leaderboards/`+(i+1)).set({ firstName, lastName, quiz, score });
  //   });
  // }
  // }

  uploadToLeaderboard(index, firstName, lastName, quiz:string, score: number){
    if(index<11){
      firebase.firestore().doc(`/leaderboards/`+index).get().then(snapshot => {
        this.l1.push(snapshot.data().firstName);
        this.l2.push(snapshot.data().lastName);
        this.l3.push(snapshot.data().score);
        this.l4.push(snapshot.data().quiz);
      if(this.l3[index-1]<score){
        firebase.firestore().doc(`/leaderboards/`+index).set({ firstName, lastName, quiz, score });
        // this.moveDown(index, this.l3[index-1]);
      }
      else{
        this.uploadToLeaderboard(index++, firstName, lastName, quiz, score);
      }
      });
    }
  }
}
