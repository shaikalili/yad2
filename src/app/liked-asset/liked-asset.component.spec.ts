import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedAssetComponent } from './liked-asset.component';

describe('LikedAssetComponent', () => {
  let component: LikedAssetComponent;
  let fixture: ComponentFixture<LikedAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
