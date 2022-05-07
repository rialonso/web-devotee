import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { IconModule } from './components/custom-icons/icon.module';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DialogsModule } from './components/dialogs/dialogs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderCardsInitialPageComponent } from './components/header-cards-initial-page/header-cards-initial-page.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderCardsInitialPageComponent,
  ],
  imports: [
    IconModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    FooterComponent,
    IconModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HeaderCardsInitialPageComponent,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
