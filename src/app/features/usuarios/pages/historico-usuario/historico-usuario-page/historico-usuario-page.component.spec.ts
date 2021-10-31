import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoUsuarioPageComponent } from './historico-usuario-page.component';

describe('HistoricoUsuarioPageComponent', () => {
  let component: HistoricoUsuarioPageComponent;
  let fixture: ComponentFixture<HistoricoUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoUsuarioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
