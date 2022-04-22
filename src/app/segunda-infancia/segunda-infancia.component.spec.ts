import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaInfanciaComponent } from './segunda-infancia.component';

describe('SegundaInfanciaComponent', () => {
  let component: SegundaInfanciaComponent;
  let fixture: ComponentFixture<SegundaInfanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaInfanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaInfanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
