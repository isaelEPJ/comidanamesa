import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEmpresaPageComponent } from './painel-empresa-page.component';

describe('PainelEmpresaPageComponent', () => {
  let component: PainelEmpresaPageComponent;
  let fixture: ComponentFixture<PainelEmpresaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelEmpresaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelEmpresaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
