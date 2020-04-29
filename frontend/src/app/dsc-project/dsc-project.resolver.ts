import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DscProject } from './dsc-project';
import { DscProjectService } from './dsc-project.service';

@Injectable()
export class DscAllProjectResolver implements Resolve<DscProject[]> {
  constructor(private ProjectService: DscProjectService) {}

  resolve(): Observable<DscProject[]> {
    return this.ProjectService.getAllProject();
  }
}

@Injectable()
export class DscProjectResolver implements Resolve<DscProject> {
  constructor(private ProjectService: DscProjectService) {}

  resolve(): Observable<DscProject> {
    return this.ProjectService.getProject('5e9d79ea81f8ad60d9c429df');
  }
}
