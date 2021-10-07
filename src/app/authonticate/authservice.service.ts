import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, timestamp } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface authResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  sendUserSub = new Subject<User>();
  constructor(private http: HttpClient, private route:Router) {}

  getErrorHandler(errorResponse: HttpErrorResponse) {
    let errorMessage = 'error occured';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email Already Exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Invalid Email';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password';
        break;
    }

    return throwError(errorMessage);
  }

  private handleUser(response: authResponse) {
    const expireDate = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      expireDate
    );
    //console.log('response handleuser' + JSON.stringify(response))
    this.sendUserSub.next(user);
    localStorage.setItem('userData', JSON.stringify(user))
    this.autoLogout(+response.expiresIn * 1000)
  }

  loginuser(email: any, password: any) {
    return this.http
      .post<authResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-kIJTi0yUQ190zTXZl_zvXffdzjq5eVQ',
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }

  postuserdetails(email: any, password: any) {
    return this.http
      .post<authResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-kIJTi0yUQ190zTXZl_zvXffdzjq5eVQ',
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }

  logoutUser() {
    this.sendUserSub.next(null);
    this.route.navigate(['/authonticate']);
    localStorage.removeItem('userData')
   
  }

  autoLogin() {
    let userData: {
      email: string;
      _token: string;
      localId: string;
      expirationDate: string;
  
      
    } = JSON.parse(localStorage.getItem('userData'))

   
    
    let user = new User(
      userData.email, 
      userData._token, 
      userData.localId,
      new Date(userData.expirationDate)
     
    )
    // if(!user) {
    //   return;
    // }

 
  

    if(user.token) {
      this.sendUserSub.next(user)
     
    }

   

  }

  autoLogout(expireDate) {
    console.log(expireDate)
    setTimeout(()=> {
     this.logoutUser()
    }, expireDate - 3540000)
  }



 
}
