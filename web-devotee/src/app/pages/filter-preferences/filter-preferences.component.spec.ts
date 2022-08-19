import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPreferencesComponent } from './filter-preferences.component';

describe('FilterPreferencesComponent', () => {
  let component: FilterPreferencesComponent;
  let fixture: ComponentFixture<FilterPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
