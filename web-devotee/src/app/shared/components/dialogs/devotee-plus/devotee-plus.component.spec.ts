import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteePlusComponent } from './devotee-plus.component';

describe('DevoteePlusComponent', () => {
  let component: DevoteePlusComponent;
  let fixture: ComponentFixture<DevoteePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevoteePlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
