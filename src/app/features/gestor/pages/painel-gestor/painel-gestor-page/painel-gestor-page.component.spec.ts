import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelGestorPageComponent } from './painel-gestor-page.component';

describe('PainelGestorPageComponent', () => {
  let component: PainelGestorPageComponent;
  let fixture: ComponentFixture<PainelGestorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelGestorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelGestorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
