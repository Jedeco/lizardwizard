import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeluidComponent } from './geluid.component';

describe('GeluidComponent', () => {
  let component: GeluidComponent;
  let fixture: ComponentFixture<GeluidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeluidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
