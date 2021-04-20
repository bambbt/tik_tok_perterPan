import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksControllerComponent } from './clocks-controller.component';

describe('ClocksControllerComponent', () => {
  let component: ClocksControllerComponent;
  let fixture: ComponentFixture<ClocksControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClocksControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocksControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
