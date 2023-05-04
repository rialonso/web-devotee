import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectCidsComponent } from './multiple-select-cids.component';

describe('MultipleSelectCidsComponent', () => {
  let component: MultipleSelectCidsComponent;
  let fixture: ComponentFixture<MultipleSelectCidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleSelectCidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectCidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
