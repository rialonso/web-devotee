/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangeUserTypeComponent } from './change-user-type.component';
import { State, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChangeUserTypeComponent', () => {
  let component: ChangeUserTypeComponent;
  let fixture: ComponentFixture<ChangeUserTypeComponent>;
  const storeMock = {
      select() {
        return of({ name: 'Peter', registrationDate: '11/11/18' });
      }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUserTypeComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: Store,
          useValue: storeMock
        },
        {
          provide: State,
          useValue: storeMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
