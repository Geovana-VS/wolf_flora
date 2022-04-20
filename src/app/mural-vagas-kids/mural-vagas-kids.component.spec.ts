import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralVagasKidsComponent } from './mural-vagas-kids.component';

describe('MuralVagasKidsComponent', () => {
  let component: MuralVagasKidsComponent;
  let fixture: ComponentFixture<MuralVagasKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralVagasKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralVagasKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
