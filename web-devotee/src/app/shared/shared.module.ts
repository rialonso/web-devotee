import { MatCardModule } from '@angular/material/card';
import { CardImgTitleTextComponent } from './components/card-img-title-text/card-img-title-text.component';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { IconModule } from './components/custom-icons/icon.module';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DialogsModule } from './components/dialogs/dialogs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderCardsInitialPageComponent } from './components/header-cards-initial-page/header-cards-initial-page.component';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderLoggedComponent } from './components/header-logged/header-logged.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PrincipalLoadingComponent } from './components/principal-loading/principal-loading.component';
import { MatSliderModule } from '@angular/material/slider';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AdsCardsComponent } from './components/google-ads/ads-cards/ads-cards/ads-cards.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MultipleSelectCidsComponent } from './components/multiple-select/multiple-select-cids/multiple-select-cids.component';
import { MultipleSelectDrugsComponent } from './components/multiple-select/multiple-select-drugs/multiple-select-drugs.component';

const components = [
  FooterComponent,
  HeaderCardsInitialPageComponent,
  CardImgTitleTextComponent,
  HeaderLoggedComponent,
  PrincipalLoadingComponent,
  ChatMessagesComponent,
  AdsCardsComponent,
  MultipleSelectCidsComponent,
  MultipleSelectDrugsComponent,
]
const angularMaterialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatNativeDateModule,
  DragDropModule,
]
@NgModule({
  declarations: [
    ...components,
    AdsCardsComponent,
  ],
  imports: [
    ...angularMaterialModules,
    IconModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    GooglePlaceModule,

  ],
  exports: [
    ...components,
    ...angularMaterialModules,
    IconModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
