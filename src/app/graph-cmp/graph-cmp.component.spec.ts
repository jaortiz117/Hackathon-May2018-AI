import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCmpComponent } from './graph-cmp.component';

describe('GraphCmpComponent', () => {
  let component: GraphCmpComponent;
  let fixture: ComponentFixture<GraphCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
