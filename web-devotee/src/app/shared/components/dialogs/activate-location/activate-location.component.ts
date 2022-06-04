import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-activate-location',
  templateUrl: './activate-location.component.html',
  styleUrls: ['./activate-location.component.scss']
})
export class ActivateLocationComponent implements OnInit {
  dataTexts
  constructor(
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<ActivateLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

   }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
  }
  closeModal() {
    this.matDialogRef.close();
  }
}
