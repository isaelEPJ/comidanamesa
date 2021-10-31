import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoEmpresaPageComponent } from './historico-empresa-page.component';

describe('HistoricoEmpresaPageComponent', () => {
  let component: HistoricoEmpresaPageComponent;
  let fixture: ComponentFixture<HistoricoEmpresaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoEmpresaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoEmpresaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
