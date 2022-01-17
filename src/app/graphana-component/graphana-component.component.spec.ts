import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphanaComponentComponent } from './graphana-component.component';

describe('GraphanaComponentComponent', () => {
  let component: GraphanaComponentComponent;
  let fixture: ComponentFixture<GraphanaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphanaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphanaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
