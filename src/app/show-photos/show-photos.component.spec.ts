import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPhotosComponent } from './show-photos.component';

describe('ShowPhotosComponent', () => {
  let component: ShowPhotosComponent;
  let fixture: ComponentFixture<ShowPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
