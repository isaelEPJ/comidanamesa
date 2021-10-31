import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmpresaPageComponent } from './profile-empresa-page.component';

describe('ProfileEmpresaPageComponent', () => {
  let component: ProfileEmpresaPageComponent;
  let fixture: ComponentFixture<ProfileEmpresaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEmpresaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEmpresaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
