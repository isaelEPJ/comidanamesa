import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoGestorPageComponent } from './historico-gestor-page.component';

describe('HistoricoGestorPageComponent', () => {
  let component: HistoricoGestorPageComponent;
  let fixture: ComponentFixture<HistoricoGestorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoGestorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoGestorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
