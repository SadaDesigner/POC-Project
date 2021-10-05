import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export  interface authResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}
@Injectable({
  providedIn: 'root'
})


export class AuthserviceService {



  constructor(private http:HttpClient) { }

  getErrorHandler(errorResponse:HttpErrorResponse) {
    let errorMessage = 'error occured'
    if(!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage)
  }

    switch(errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email Already Exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email Not Found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password'
        break; 

    }

      return throwError(errorMessage)


  }

  loginuser(email, password) {
    return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-kIJTi0yUQ190zTXZl_zvXffdzjq5eVQ', {email, password, returnSecureToken: true})
    .pipe(
      catchError(this.getErrorHandler)
    )
  }

  postuserdetails(email, password) {
    return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-kIJTi0yUQ190zTXZl_zvXffdzjq5eVQ', {email, password, returnSecureToken: true} )
    .pipe(

      catchError(this.getErrorHandler))
      // catchError((errorResponse) => {
      //   let errorMessage = 'error occured'

      //   if(!errorResponse.error || !errorResponse.error.error) {
      //       return throwError(errorMessage)
      //   }

      //   switch(errorResponse.error.error.message) {
      //     case 'EMAIL_EXISTS':
      //       errorMessage = 'Email Already Exists!'
      //   }

      //   return throwError(errorMessage)

      // })
    
  }



} 
