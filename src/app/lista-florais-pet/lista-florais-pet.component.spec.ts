import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFloraisPetComponent } from './lista-florais-pet.component';

describe('ListaFloraisPetComponent', () => {
  let component: ListaFloraisPetComponent;
  let fixture: ComponentFixture<ListaFloraisPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFloraisPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFloraisPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
