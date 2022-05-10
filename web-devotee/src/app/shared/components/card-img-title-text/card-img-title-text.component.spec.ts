/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardImgTitleTextComponent } from './card-img-title-text.component';

describe('CardImgTitleTextComponent', () => {
  let component: CardImgTitleTextComponent;
  let fixture: ComponentFixture<CardImgTitleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImgTitleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImgTitleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
