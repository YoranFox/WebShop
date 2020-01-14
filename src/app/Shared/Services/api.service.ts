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
  session: any;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('session_cookie');
    this.getSessionToken(token).subscribe(data => {
      this.session = data;
      console.log(this.session);
      localStorage.setItem('session_cookie', JSON.stringify(data));
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

  getSessionToken(token : any): Observable<any>{
    let params = new HttpHeaders()
      .set("token", token)
    return this.http.get(this.apiURL + 'session/connect', {headers: params})
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  requestItemHold(itemId: string) : any{
    let params = new HttpHeaders({
      "item": itemId,
      "session": this.session.sessionId
    });

    this.http.get(this.apiURL + 'shop/item/hold', {headers: params})
      .pipe(
        retry(1),
        catchError(this.handleError))
      .subscribe((data) => {
          return data;
        }
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
