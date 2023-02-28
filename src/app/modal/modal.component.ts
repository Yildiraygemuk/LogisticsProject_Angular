import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
  <h2 mat-dialog-title>Modal Title</h2>
  <mat-dialog-content>
    Modal content goes here.
  </mat-dialog-content>
  <mat-dialog-actions>
  <button mat-button [mat-dialog-close]="true">OK</button>
  <button mat-button [mat-dialog-close]="false">Cancel</button>
</mat-dialog-actions>
`,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

}
