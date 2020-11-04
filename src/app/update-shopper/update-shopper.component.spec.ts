import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShopperComponent } from './update-shopper.component';

describe('UpdateShopperComponent', () => {
  let component: UpdateShopperComponent;
  let fixture: ComponentFixture<UpdateShopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateShopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
