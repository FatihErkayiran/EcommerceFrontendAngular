import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopperComponent } from './add-shopper.component';

describe('AddShopperComponent', () => {
  let component: AddShopperComponent;
  let fixture: ComponentFixture<AddShopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
