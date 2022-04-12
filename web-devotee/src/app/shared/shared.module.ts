import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { IconModule } from './components/custom-icons/icon.module';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    IconModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    FooterComponent,
    IconModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
