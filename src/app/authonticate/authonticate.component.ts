import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authResponse, AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-authonticate',
  templateUrl: './authonticate.component.html',
  styleUrls: ['./authonticate.component.scss'],
})
export class AuthonticateComponent implements OnInit {
  constructor(public authservice: AuthserviceService, public route: Router) {}

  islogin: boolean = true;
  isLoading: boolean = false;
  errorShow: any = null;
  isLoggedResponse: any;

  switchtoggle() {
    this.islogin = !this.islogin;
  }
  authformSubmit(authform) {
    this.isLoading = true;

    let authObs: Observable<authResponse>;
    if (this.islogin) {
      authObs = this.authservice.loginuser(authform.email, authform.password);
    } else {
      authObs = this.authservice.postuserdetails(
        authform.email,
        authform.password
      )

      // console.log('authform' + JSON.stringify(authform.email))
    }

    authObs.subscribe(
      (data) => {
      //  console.log(JSON.stringify(data, null, 2));

        this.isLoading = false;
        this.errorShow = null;

        //SHOW logged INFO
        this.isLoggedResponse = data;

        this.route.navigate(['/dashboard']);
      },
      (errorMessage) => {
       // console.log('error' + JSON.stringify(errorMessage, null, 4));
        this.errorShow = errorMessage;
        this.isLoading = false;
      }
    );
  }


  ngOnInit(): void {}
}
