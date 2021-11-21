import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NechesComponent } from './neches.component';

describe('NechesComponent', () => {
  let component: NechesComponent;
  let fixture: ComponentFixture<NechesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NechesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
