import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGestorPageComponent } from './profile-gestor-page.component';

describe('ProfileGestorPageComponent', () => {
  let component: ProfileGestorPageComponent;
  let fixture: ComponentFixture<ProfileGestorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGestorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGestorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
