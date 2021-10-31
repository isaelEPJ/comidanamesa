import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUsuarioPageComponent } from './profile-usuario-page.component';

describe('ProfileUsuarioPageComponent', () => {
  let component: ProfileUsuarioPageComponent;
  let fixture: ComponentFixture<ProfileUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUsuarioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
