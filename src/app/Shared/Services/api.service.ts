import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";
import {SessionModel} from "../Models/session-model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:8080/'
  test : Observable<any>;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('session_cookie');
    console.log('stored token', token)
    this.getSessionToken(new SessionModel(token)).subscribe((data) => {

      console.log('token',(<SessionModel>data).token);
      localStorage.setItem('session_cookie', (<SessionModel>data).token);
    });

    this.refreshContent();
  }

  //error handling
  handleError(error){
    let errorMessage ='';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getSessionToken(token : SessionModel): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'token': token.token
      })
    };
    return this.http.get(this.apiURL + 'session/connect', httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //GET resource path
  getResource(path: string, param: any): any {
    this.http.get(this.apiURL + path, param)
      .pipe(
        retry(1),
        catchError(this.handleError)
      ).subscribe((data) => {
        return data;
      }
    )
  }

  //GET resource path
  createResourceObservable(path: string) : Observable<any>{
    return this.http.get(this.apiURL + path)
      .pipe(retry(1 ), catchError(this.handleError));
  }

  //POST resource path
  postResource(path: string, param: any): any{
    this.http.post(this.apiURL + path, param)
      .pipe(
        retry(1),
        catchError(this.handleError)
      ).subscribe((data)=>{
        return data;
      }
    )
  }

  refreshContent() {
    this.test = this.createResourceObservable('shop/lp/test');

  }

  getCurrentToken() {
    return localStorage.getItem('session_cookie');
  }
}
