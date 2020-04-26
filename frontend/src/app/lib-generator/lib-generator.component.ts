import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LibGeneratorService } from './lib-generator.service';

export interface DialogData {
  projectId: string;
  projectName: string;
}

@Component({
  selector: 'app-lib-generator',
  templateUrl: './lib-generator.component.html',
  styleUrls: ['./lib-generator.component.scss']
})
export class LibGeneratorComponent {
  isLoading = false;
  filePath: string;

  constructor(
    private dialogRef: MatDialogRef<LibGeneratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private libGeneratorService: LibGeneratorService
  ) {
    dialogRef.disableClose = true;
    this.isLoading = true;
    this.libGeneratorService.generateLibrary(data.projectId).subscribe(response => {
      this.isLoading = false;
      this.filePath = response.filePath;
    });
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}
