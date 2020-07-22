import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss'],
})
export class Day1Component {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }
}
