import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelGestorComponentComponent } from './painel-gestor-component.component';

describe('PainelGestorComponentComponent', () => {
  let component: PainelGestorComponentComponent;
  let fixture: ComponentFixture<PainelGestorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelGestorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelGestorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
