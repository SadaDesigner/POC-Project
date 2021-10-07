import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user.model';

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
  sendUserSub = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {}

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
}
