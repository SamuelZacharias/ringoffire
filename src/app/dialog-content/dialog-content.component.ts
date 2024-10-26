import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  animal: string;
}

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'], // korrigiert: styleUrls statt styleUrl
})
export class DialogContentComponent {
  name: string = '';
  animal: string = ''; // animal-Eigenschaft hinzugefügt

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data) {
      this.name = data.name;
      this.animal = data.animal;
    }
  }

  onNoClick(): void {
    this.dialogRef.close(null); // gibt explizit null zurück
  }
  
}
