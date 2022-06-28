import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile-pictures',
  templateUrl: './edit-profile-pictures.component.html',
  styleUrls: ['./edit-profile-pictures.component.scss']
})
export class EditProfilePicturesComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<EditProfilePicturesComponent>,

  ) { }

  ngOnInit() {
  }

}
