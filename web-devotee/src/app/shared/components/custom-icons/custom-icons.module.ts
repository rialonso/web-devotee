import { MatIconRegistry } from '@angular/material';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from "@angular/platform-browser";


const logoURL =
"https://raw.githubusercontent.com/fireflysemantics/logo/master/l1.svg";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class CustomIconsModule  {
  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
          this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(logoURL));
    }
}
