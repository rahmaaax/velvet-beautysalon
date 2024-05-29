import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialComponent } from './facial.component';

describe('FacialComponent', () => {
  let component: FacialComponent;
  let fixture: ComponentFixture<FacialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacialComponent]
    });
    fixture = TestBed.createComponent(FacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
