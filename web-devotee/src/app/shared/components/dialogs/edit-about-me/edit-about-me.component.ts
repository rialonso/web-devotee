import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.scss']
})
export class EditAboutMeComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<EditAboutMeComponent>,

  ) { }

  ngOnInit() {
  }

}
