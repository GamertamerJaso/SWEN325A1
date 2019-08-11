import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import * as firebase from 'firebase/app';
import { promise } from 'protractor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.page.html',
  styleUrls: ['./passwordreset.page.scss'],
})
export class PasswordresetPage implements OnInit {
  email;
  public passwordresetForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  constructor(
    private firebaseService: FirebaseService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.passwordresetForm = this.formBuilder.group({
      email: ['',Validators.compose([Validators.required, Validators.email])]
    })}

  ngOnInit() {}

  async processForm(passwordresetForm: FormGroup): Promise<void> {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.firebaseService.resetPassword(passwordresetForm.value.email).then(
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
