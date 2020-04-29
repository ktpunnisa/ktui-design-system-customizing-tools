import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { DscProject } from './dsc-project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DscProjectService {
  selectedMenu: string;
  allProject: DscProject[];
  currentProject: DscProject;
  constructor(private apiService: ApiService) {}

  getProject(projectId: string): Observable<DscProject> {
    return this.apiService.get(`project/${projectId}`);
  }

  getAllProject(): Observable<DscProject[]> {
    return this.apiService.get('project');
  }

  addProject(name: string, creator: string): Observable<any> {
    return this.apiService.post('project', { projectName: name, creator });
  }

  generateProject(projectId: string): Observable<any> {
    return this.apiService.post(`project/${projectId}/generate`, {});
  }

  deleteProject(projectId: string): Observable<any> {
    return this.apiService.delete(`project/${projectId}`);
  }
}
