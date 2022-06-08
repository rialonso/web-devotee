import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dataTexts
  constructor(
    private matDialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translateService: TranslateService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;

  }

  ngOnInit() {
  }
  closeModal() {
    this.matDialogRef.close(c => {

    });
  }
}
