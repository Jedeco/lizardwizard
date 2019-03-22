import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdcComponent } from './jdc.component';

describe('JdcComponent', () => {
  let component: JdcComponent;
  let fixture: ComponentFixture<JdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
