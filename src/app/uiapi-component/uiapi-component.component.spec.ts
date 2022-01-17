import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiapiComponentComponent } from './uiapi-component.component';

describe('UiapiComponentComponent', () => {
  let component: UiapiComponentComponent;
  let fixture: ComponentFixture<UiapiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiapiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiapiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
