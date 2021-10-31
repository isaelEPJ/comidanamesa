import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateraBarComponent } from './latera-bar.component';

describe('LateraBarComponent', () => {
  let component: LateraBarComponent;
  let fixture: ComponentFixture<LateraBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateraBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateraBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
