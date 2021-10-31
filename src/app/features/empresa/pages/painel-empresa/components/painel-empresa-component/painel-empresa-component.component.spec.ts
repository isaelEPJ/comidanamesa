import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEmpresaComponentComponent } from './painel-empresa-component.component';

describe('PainelEmpresaComponentComponent', () => {
  let component: PainelEmpresaComponentComponent;
  let fixture: ComponentFixture<PainelEmpresaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelEmpresaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelEmpresaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
