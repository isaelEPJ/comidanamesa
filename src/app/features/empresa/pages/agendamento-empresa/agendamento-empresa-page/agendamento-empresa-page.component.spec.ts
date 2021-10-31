import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoEmpresaPageComponent } from './agendamento-empresa-page.component';

describe('AgendamentoEmpresaPageComponent', () => {
  let component: AgendamentoEmpresaPageComponent;
  let fixture: ComponentFixture<AgendamentoEmpresaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoEmpresaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoEmpresaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
