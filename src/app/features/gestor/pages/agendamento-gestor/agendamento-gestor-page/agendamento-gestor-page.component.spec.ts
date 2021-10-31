import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoGestorPageComponent } from './agendamento-gestor-page.component';

describe('AgendamentoGestorPageComponent', () => {
  let component: AgendamentoGestorPageComponent;
  let fixture: ComponentFixture<AgendamentoGestorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoGestorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoGestorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
