import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossOutIconComponent } from './cross-out-icon.component';

describe('CrossOutIconComponent', () => {
  let component: CrossOutIconComponent;
  let fixture: ComponentFixture<CrossOutIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossOutIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossOutIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
