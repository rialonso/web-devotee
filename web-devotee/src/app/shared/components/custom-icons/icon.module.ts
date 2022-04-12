import { NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
@NgModule({
  imports:[MatIconModule],
  exports: [MatIconModule],
  providers:[MatIconRegistry]})
export class IconModule {
 private path = '../../../../assets/images';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry
      .addSvgIcon('navigate_before', this.setPath(`${this.path}/navigate_before.svg`));
    }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
