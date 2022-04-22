import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreFloraisComponent } from './sobre-florais.component';

describe('SobreFloraisComponent', () => {
  let component: SobreFloraisComponent;
  let fixture: ComponentFixture<SobreFloraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreFloraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreFloraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
