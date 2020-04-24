import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryGeneratorService {
  constructor(private http: HttpClient) {}

  libraryURL(fileName): string {
    return resolve(environment.staticURL, fileName || '');
  }

  getLibrary(fileName: string): Observable<any> {
    return this.http.get(this.libraryURL(fileName), {
      responseType: 'blob'
    });
  }
}
