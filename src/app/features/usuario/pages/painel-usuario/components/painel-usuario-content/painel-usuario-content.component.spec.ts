import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelUsuarioContentComponent } from './painel-usuario-content.component';

describe('PainelUsuarioContentComponent', () => {
  let component: PainelUsuarioContentComponent;
  let fixture: ComponentFixture<PainelUsuarioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelUsuarioContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelUsuarioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
