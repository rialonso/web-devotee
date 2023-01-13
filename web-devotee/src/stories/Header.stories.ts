import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { State, Store, props } from '@ngrx/store';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { DialogsService } from 'src/app/shared/functions/dialogs/dialogs.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { LandingPageComponent } from 'src/app/pages/landing-page/landing-page.component';


export default {
  title: 'Example/lading-page',
  component: LandingPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [LandingPageComponent],
      imports: [CommonModule],
      providers: [
        {provide: Store, useValue: {}},
        {provide: State, useValue: {}},
        {provide: Router, useValue: {}},
        {provide: TranslateService, useValue: {}},
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }),
  ],
} as Meta;

const Template: Story<LandingPageComponent> = (args: LandingPageComponent) => ({
  props: {
    ...args
  },
});
const translateService = new TranslateService();
export const LadingPage = Template.bind({});
LadingPage.props.args = {
  dataTexts:  translateService.textTranslate
}
// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
