import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CS50 } from 'src/app/models/cs50';
import { RATING } from 'src/app/models/rating';
import { parseMappings } from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/source_file';

@Injectable({
  providedIn: 'root'
})
export class Cs50Service {

  constructor(private http:HttpClient){}

  //-------------------Testimonials-------------------
  
  urlmessages  = "http://localhost:5555/cs50/";
  
  postMessage(message: CS50): Observable<any>{
    return this.http.post(this.urlmessages, message);
  }
  
  getMessages(): Observable<any>{
    return this.http.get(this.urlmessages);
  }

  //-------------------Rating-------------------
  
  urlrating  = "http://localhost:5555/cs50/rating/";
  // urlrating  = "https://crudbackendllopez.herokuapp.com/cs50/rating/"
  
  postRating(rating: RATING): Observable<any>{
    return this.http.post(this.urlrating, rating);
  }
  
  getRatings(): Observable<any>{
    return this.http.get(this.urlrating);
  }
  
  getRating(id: any): Observable<any>{
    return this.http.get(`${this.urlrating}/${id}`);
  }
  
  putRating(id: string, rating: RATING):Observable<any>{
    return this.http.put(`${this.urlrating}/${id}`, rating);
	}
  
  //-------------------Download Files-------------------


  urldownload  = "http://localhost:5555/cs50/download";
  downloadFile(file: string): Observable<any>{
    const param = new HttpParams().set("filename", file);
    const options = {
      params: param
    };
    return this.http.get(this.urldownload, {...options, responseType:'blob'});
  }
}
