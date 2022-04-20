import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstornosComponent } from './transtornos.component';

describe('TranstornosComponent', () => {
  let component: TranstornosComponent;
  let fixture: ComponentFixture<TranstornosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranstornosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranstornosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
