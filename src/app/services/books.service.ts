import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseurl="https://sheetdb.io/api/v1/ec1r2adg5jhfe";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Books[]>{
   return this.http.get<Books[]>(this.baseurl)
  }
}

