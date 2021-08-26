import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authForm : FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {

    this.authForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  authentification(){
    const val = this.authForm.value;

        if (val.login && val.password) {
            // Inserer l'authentification
            this.authService.authentification(val.login, val.password)
            .subscribe(
              () => {
                  console.log("User is logged in");
              }
          );
        }
  }


}
