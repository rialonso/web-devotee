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
      .addSvgIcon('navigate_before', this.setPath(`${this.path}/navigate_before.svg`))
      .addSvgIcon('logo_google', this.setPath(`${this.path}/logo-google.svg`))
      .addSvgIcon('icon_qr_code', this.setPath(`${this.path}/qr_code.svg`))
      .addSvgIcon('logo_raposo_shoping', this.setPath(`${this.path}/logo-raposo-shopping.svg`))
      .addSvgIcon('check_magenta', this.setPath(`${this.path}/check.svg`))
      .addSvgIcon('camera_add_picture', this.setPath(`${this.path}/camera-add-picture.svg`))
      .addSvgIcon('add_location', this.setPath(`${this.path}/add_location.svg`))
      .addSvgIcon('heart', this.setPath(`${this.path}/heart.svg`))

      ;

    }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
