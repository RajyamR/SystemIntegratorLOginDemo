import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformmetricsComponentComponent } from './platformmetrics-component.component';

describe('PlatformmetricsComponentComponent', () => {
  let component: PlatformmetricsComponentComponent;
  let fixture: ComponentFixture<PlatformmetricsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformmetricsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformmetricsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
