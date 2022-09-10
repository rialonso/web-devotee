import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedMeComponent } from './liked-me.component';

describe('LikedMeComponent', () => {
  let component: LikedMeComponent;
  let fixture: ComponentFixture<LikedMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
