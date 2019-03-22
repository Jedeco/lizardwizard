import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeldComponent } from './beeld.component';

describe('BeeldComponent', () => {
  let component: BeeldComponent;
  let fixture: ComponentFixture<BeeldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
