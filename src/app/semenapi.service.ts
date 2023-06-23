import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "./models";

@Injectable({
  providedIn: 'root'
})
export class SemenapiService {
  BASE_URL = 'http://185.182.219.47:8000'
  constructor(private http: HttpClient) {}

  uploadImage(data: FormData): Observable<Image>{
    let headers = new Headers();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("Accept", "application/json");

    console.log("sdd");

    return this.http.post<Image>(this.BASE_URL + '/use_model', data);
  }
}
