import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-use-of-terms',
  templateUrl: './use-of-terms.component.html',
  styleUrls: ['./use-of-terms.component.scss']
})
export class UseOfTermsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<UseOfTermsComponent>,
  ) { }

  ngOnInit(): void {
  }

}
