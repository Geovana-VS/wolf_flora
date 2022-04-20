import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFloraisComponent } from './menu-florais.component';

describe('MenuFloraisComponent', () => {
  let component: MenuFloraisComponent;
  let fixture: ComponentFixture<MenuFloraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFloraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFloraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
