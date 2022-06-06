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

const components = [
  FooterComponent,
  HeaderCardsInitialPageComponent,
  CardImgTitleTextComponent,
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
]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...angularMaterialModules,
    IconModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,

  ],
  exports: [
    ...components,
    ...angularMaterialModules,
    IconModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
