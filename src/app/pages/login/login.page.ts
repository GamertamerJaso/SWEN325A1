import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import * as firebase from 'firebase/app';
import { promise } from 'protractor';
// import { AlertController, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email: string;
  password;
  promise;

  user;

  constructor(
    // private view: ViewController,
    private firebaseService: FirebaseService,
    // private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  processForm() {
    console.log('button clicked');
    if (this.firebaseService.doLogin(this.email, this.password)) {
      console.log('login worked');
    }
  }

  loginUser(): Promise<firebase.auth.UserCredential> {
    console.log('yoyo');
    this.promise = firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    this.promise.subscribe(data => {
      if (data && data.email && data.uid) {
        this.presentVerifyAlert();
        console.log('successful login');
      } else {
        console.log('yut');
      }
    });
    console.log(this.promise);
    return this.promise;
  }

  presentVerifyAlert() {
    if (!this.firebaseService.loggedIn)                     ate({
      //   title: 'Logged In!',
      //   subTitle: 'You successfully logged in',
      //   buttons: ['Dismiss']
      // });
      this.firebaseService.loggedIn = true;
      this.dismiss();
      // alert.present();
    }
  }

  dismiss() {
    // this.view.dismiss();
    this.email = null;
    this.password = null;
  }
}
