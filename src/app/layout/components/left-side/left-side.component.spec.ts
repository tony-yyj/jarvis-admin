import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeftSideComponent } from './left-side.component';

describe('LeftSideComponent', () => {
  let component: LeftSideComponent;
  let fixture: ComponentFixture<LeftSideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
