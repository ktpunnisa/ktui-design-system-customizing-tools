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
  fileName: string;

  constructor(
    private dialogRef: MatDialogRef<LibGeneratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private libGeneratorService: LibGeneratorService
  ) {
    dialogRef.disableClose = true;
    this.fileName = data.projectName;
    this.isLoading = true;
    this.libGeneratorService.generateLibrary(data.projectId).subscribe(response => {
      this.isLoading = false;
      this.filePath = response.filePath;
    });
  }

  download() {
    const a: any = document.createElement('a');
    document.body.appendChild(a);

    a.style = 'display: none';
    const url = this.libGeneratorService.libraryURL(this.filePath);
    a.href = url;
    a.download = `${this.fileName}-library.zip`;
    a.click();
    window.URL.revokeObjectURL(url);

    this.onCloseDialog();
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}
