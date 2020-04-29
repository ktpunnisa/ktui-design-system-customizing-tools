import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LibGeneratorComponent } from '../lib-generator/lib-generator.component';
import { DscProjectService } from '../dsc-project/dsc-project.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog, protected ProjectService: DscProjectService) {}

  ngOnInit() {}

  openDialog(): void {
    this.dialog.open(LibGeneratorComponent, {
      width: '350px',
      height: '250px',
      data: { projectId: '5e9d79ea81f8ad60d9c429df', projectName: 'test' }
    });
  }
}
