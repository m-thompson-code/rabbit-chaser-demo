import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitIconComponent } from './rabbit-icon.component';

describe('RabbitIconComponent', () => {
  let component: RabbitIconComponent;
  let fixture: ComponentFixture<RabbitIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabbitIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
