import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import * as firebase from 'firebase/app';
import { promise } from 'protractor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  password;
  public signupForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  constructor(
    private firebaseService: FirebaseService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group({
      first: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
      last: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['',Validators.compose([Validators.required, Validators.minLength(6)]),], });}

  ngOnInit() {}

  async processForm(signupForm: FormGroup): Promise<void> {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.firebaseService.signupUser(signupForm.value.first, signupForm.value.last, signupForm.value.email, this.password).then(
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
}
