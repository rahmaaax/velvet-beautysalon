import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkProductListComponent } from './sk-product.list.component';

describe('SkProductListComponent', () => {
  let component: SkProductListComponent;
  let fixture: ComponentFixture<SkProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkProductListComponent]
    });
    fixture = TestBed.createComponent(SkProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
