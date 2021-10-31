import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoUsuarioPageComponent } from './agendamento-usuario-page.component';

describe('AgendamentoUsuarioPageComponent', () => {
  let component: AgendamentoUsuarioPageComponent;
  let fixture: ComponentFixture<AgendamentoUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoUsuarioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
