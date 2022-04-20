import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloraisAutoconhecimentoComponent } from './florais-autoconhecimento.component';

describe('FloraisAutoconhecimentoComponent', () => {
  let component: FloraisAutoconhecimentoComponent;
  let fixture: ComponentFixture<FloraisAutoconhecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloraisAutoconhecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloraisAutoconhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
