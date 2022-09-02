import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-devotee-plus',
  templateUrl: './devotee-plus.component.html',
  styleUrls: ['./devotee-plus.component.scss']
})
export class DevoteePlusComponent implements OnInit {
  dataTexts;
  constructor(
    private matDialogRef: MatDialogRef<DevoteePlusComponent>,
    private translateService: TranslateService,

  ) {
    this.dataTexts = this.translateService?.textTranslate;

   }

  ngOnInit(): void {
  }
  closeModal() {
    this.matDialogRef.close();
  }
}
