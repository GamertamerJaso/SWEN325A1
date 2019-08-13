import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  firstName=[];
  lastName=[];
  email=[];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getCurrentUser();
    this.firstName = this.firebaseService.firstName;
    this.lastName = this.firebaseService.lastName;
    this.email = this.firebaseService.email;
  }
  

}
