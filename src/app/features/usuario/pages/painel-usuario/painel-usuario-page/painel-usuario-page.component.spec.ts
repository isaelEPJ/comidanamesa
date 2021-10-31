import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelUsuarioPageComponent } from './painel-usuario-page.component';

describe('PainelUsuarioPageComponent', () => {
  let component: PainelUsuarioPageComponent;
  let fixture: ComponentFixture<PainelUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelUsuarioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
