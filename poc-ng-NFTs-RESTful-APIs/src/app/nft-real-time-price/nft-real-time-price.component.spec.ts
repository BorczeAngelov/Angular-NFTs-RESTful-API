import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftRealTimePriceComponent } from './nft-real-time-price.component';

describe('NftRealTimePriceComponent', () => {
  let component: NftRealTimePriceComponent;
  let fixture: ComponentFixture<NftRealTimePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftRealTimePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftRealTimePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
