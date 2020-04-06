import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { environment } from '../environments/environment';

interface HttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: any, credentials: boolean = true): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    if (params) {
      options.params = params;
    }
    return this.http.get<T>(resolve(environment.apiPath, url), options);
  }

  post<T>(url: string, data: any, credentials: boolean = true): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    return this.http.post<T>(resolve(environment.apiPath, url), data, options);
  }

  put<T>(url: string, data: any, credentials: boolean = true): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    return this.http.put<T>(resolve(environment.apiPath, url), data, options);
  }

  patch<T>(url: string, data: any, credentials: boolean = true): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    return this.http.patch<T>(resolve(environment.apiPath, url), data, options);
  }

  resolve(url: string) {
    return resolve(environment.apiPath, url);
  }

  delete<T>(url: string, params?: any, credentials: boolean = true): Observable<T> {
    const options: HttpOptions = {};
    if (credentials) {
      options.withCredentials = true;
    }
    if (params) {
      options.params = params;
    }
    return this.http.delete<T>(resolve(environment.apiPath, url), options);
  }
}
