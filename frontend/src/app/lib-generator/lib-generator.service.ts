import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { resolve } from 'url';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibGeneratorService {
  constructor(private apiService: ApiService) {}

  libraryURL(fileName): string {
    return resolve(environment.staticURL, fileName || '');
  }

  getLibrary(fileName: string) {
    return this.apiService.get(fileName, { responseType: 'arraybuffer' });
  }

  generateLibrary(projectId: string): Observable<any> {
    return this.apiService.get(`project/${projectId}/generate`);
  }
}
