import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { resolve } from 'url';
import { environment } from 'src/environments/environment';

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
}
