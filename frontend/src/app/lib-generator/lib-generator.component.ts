import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  constructor(
    private dialogRef: MatDialogRef<LibGeneratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = true;
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}
