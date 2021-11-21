import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstaitComponent } from './real-estait.component';

describe('RealEstaitComponent', () => {
  let component: RealEstaitComponent;
  let fixture: ComponentFixture<RealEstaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
