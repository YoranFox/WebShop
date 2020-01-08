import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:8080/'
  test : Observable<any>;

  constructor(private http: HttpClient) {
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
}
