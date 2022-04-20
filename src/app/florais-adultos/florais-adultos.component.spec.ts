import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloraisAdultosComponent } from './florais-adultos.component';

describe('FloraisAdultosComponent', () => {
  let component: FloraisAdultosComponent;
  let fixture: ComponentFixture<FloraisAdultosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloraisAdultosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloraisAdultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
