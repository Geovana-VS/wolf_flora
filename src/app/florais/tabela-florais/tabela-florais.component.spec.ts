import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaFloraisComponent } from './tabela-florais.component';

describe('TabelaFloraisComponent', () => {
  let component: TabelaFloraisComponent;
  let fixture: ComponentFixture<TabelaFloraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaFloraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaFloraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
