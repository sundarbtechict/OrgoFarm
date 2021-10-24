import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  serviceAddress = environment.serviceURL;

  constructor(private http: HttpClient) {
  }

  postData(methodName:any, Input:any) {
    const url = this.serviceAddress + methodName;
    return this.http.post(url, Input)
  }
  
  getData(methodName:any) {
    const url = this.serviceAddress + methodName;
    return this.http.get(url)
  }

}
