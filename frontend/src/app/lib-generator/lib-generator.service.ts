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
    return resolve(environment.apiPath, fileName || '');
  }

  generateLibrary(projectId: string): Observable<any> {
    return this.apiService.get(`project/${projectId}/generate`);
  }

  getLibrary(projectId: string, filePath: string): Observable<any> {
    return this.apiService.get(`project/${projectId}/library`, { filePath });
  }
}
