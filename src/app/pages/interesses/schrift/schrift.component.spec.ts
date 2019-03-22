import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchriftComponent } from './schrift.component';

describe('SchriftComponent', () => {
  let component: SchriftComponent;
  let fixture: ComponentFixture<SchriftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchriftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
