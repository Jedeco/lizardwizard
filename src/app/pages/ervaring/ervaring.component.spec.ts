import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErvaringComponent } from './ervaring.component';

describe('ErvaringComponent', () => {
  let component: ErvaringComponent;
  let fixture: ComponentFixture<ErvaringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErvaringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErvaringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
