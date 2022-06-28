import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ActivateLocationComponent } from '../../components/dialogs/activate-location/activate-location.component';
import { LoginQrCodeComponent } from '../../components/dialogs/login-qr-code/login-qr-code.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ProfileComponent } from '../../components/dialogs/profile/profile.component';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { EditProfilePicturesComponent } from '../../components/dialogs/edit-profile-pictures/edit-profile-pictures.component';
import { EditAboutMeComponent } from '../../components/dialogs/edit-about-me/edit-about-me.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );
  isMedium: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Medium
  );
  isLarge: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Large
  );
  constructor(
    private dialog: MatDialog,
    private readonly breakpointObserver: BreakpointObserver
  ) { }
  updateSizes(modal) {
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      size.matches ? modal.updateSize('100vw', '100vh'): undefined ;
    });

    const mediumDialogSubscription = this.isMedium.subscribe(size => {
       size.matches ? modal.updateSize('70%', '50%') : undefined;
    });
    const largeDialogSubscription = this.isLarge.subscribe(size => {
      size.matches ? modal.updateSize('70%', '70%'): undefined ;

    });
    modal.afterClosed().subscribe(() => {
      smallDialogSubscription.unsubscribe();
      mediumDialogSubscription.unsubscribe();
      largeDialogSubscription.unsubscribe();
    });

  }
  openQrCodeSignIn() {
    const modal = this.dialog.open(
      LoginQrCodeComponent,
      {
        width: 'calc(100% - 50px)',
        maxWidth: '100vw'
      }
    );
    this.updateSizes(modal);
  }
  openActivateLocation() {
   const modal =  this.dialog.open(
      ActivateLocationComponent,
      {
        width: 'calc(100% - 50px)',
        maxWidth: '450px'
      }
    );
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      size.matches ? modal.updateSize('100vw', '100vh'): undefined ;
    });
    return modal;
  }
  openProfile(data?: IUserData.IData) {
    const modal =  this.dialog.open(
      ProfileComponent,
      {
        width: 'calc(100% - 50px)',
        maxWidth: '1100px',
        panelClass: 'profile-container',
        data: data
      },
    );
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      size.matches ? modal.updateSize('100vw', '100vh'): undefined ;
    });
    return modal;
  }
  openEditProfilePicture() {
    const modal =  this.dialog.open(
      EditProfilePicturesComponent,
      {
        width: 'calc(50%)',
        maxWidth: '1100px',
        panelClass: 'container-edit-profile',
      },
    );
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      size.matches ? modal.updateSize('100vw', '100vh'): undefined ;
    });
    return modal;
  }
  openEditAboutMe() {
    const modal =  this.dialog.open(
      EditAboutMeComponent,
      {
        width: 'calc(80%)',
        maxWidth: '1100px',
        panelClass: 'container-edit-profile',
      },
    );
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      size.matches ? modal.updateSize('100vw', '100vh'): undefined ;
    });
    return modal;
  }
}
