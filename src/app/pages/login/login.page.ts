import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import * as firebase from 'firebase/app';
import { promise } from 'protractor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';
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
  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;
  user;

  constructor(
    // private view: ViewController,
    private firebaseService: FirebaseService,
    // private alertCtrl: AlertController
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),], });}

  ngOnInit() {}

  async processForm(loginForm: FormGroup): Promise<void> {
    // console.log('button clicked');
    // if (this.firebaseService.doLogin(this.email, this.password)) {
    //   console.log('login worked');
    // }
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.firebaseService.loginUser(loginForm.value.email, this.password).then(
      () => {
        this.loading.dismiss().then(() => {
          this.router.navigateByUrl('home');
        });
      },
      error => {
        this.loading.dismiss().then(async () => {
          const alert = await this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: 'Ok', role: 'cancel' }],
          });
          await alert.present();
        });
      }
    );
  }

  // loginUser(): Promise<firebase.auth.UserCredential> {
  //   console.log('yoyo');
  //   this.promise = firebase.auth().signInWithEmailAndPassword(this.email, this.password);
  //   this.promise.subscribe(data => {
  //     if (data && data.email && data.uid) {
  //       this.presentVerifyAlert();
  //       console.log('successful login');
  //     } else {
  //       console.log('yut');
  //     }
  //   });
  //   console.log(this.promise);
  //   return this.promise;
  // }

  // presentVerifyAlert() {
  //   if (!this.firebaseService.loggedIn){
  //     //   title: 'Logged In!',
  //     //   subTitle: 'You successfully logged in',
  //     //   buttons: ['Dismiss']
  //     // });
  //     this.firebaseService.loggedIn = true;
  //     this.dismiss();
  //     // alert.present();
  //   }
  // }

  dismiss() {
    // this.view.dismiss();
    this.email = null;
    this.password = null;
  }
}
