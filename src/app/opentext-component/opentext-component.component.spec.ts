import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpentextComponentComponent } from './opentext-component.component';

describe('OpentextComponentComponent', () => {
  let component: OpentextComponentComponent;
  let fixture: ComponentFixture<OpentextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpentextComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpentextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
