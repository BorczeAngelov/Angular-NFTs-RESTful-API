import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNftCollectionsComponent } from './all-nft-collections.component';

describe('AllNftCollectionsComponent', () => {
  let component: AllNftCollectionsComponent;
  let fixture: ComponentFixture<AllNftCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNftCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNftCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
