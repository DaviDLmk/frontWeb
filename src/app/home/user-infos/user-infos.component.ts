import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getTokenAPIResponse } from 'src/app/auth-service.service';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss'],
})
export class UserInfosComponent implements OnInit {

  info$ : Observable<getTokenAPIResponse>;
  error: boolean = false;

  constructor(private userService : UserService) { }

  ngOnInit() {}

  getInfo() {
    this.error = false;
    // Récupération des infos utilisateur
    this.info$ = this.userService.getInfo()
    .pipe(
      // Gestion en cas d'erreur (code HTTP différent de 200)
      catchError(err => {
        this.error = true;
        return new Observable<never>();
      })
    );

  }

}
