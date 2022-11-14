import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftMediaComponent } from './nft-media.component';

describe('NftMediaComponent', () => {
  let component: NftMediaComponent;
  let fixture: ComponentFixture<NftMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
