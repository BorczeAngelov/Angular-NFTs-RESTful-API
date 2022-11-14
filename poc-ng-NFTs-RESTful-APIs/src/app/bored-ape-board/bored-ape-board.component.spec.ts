import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredApeBoardComponent } from './bored-ape-board.component';

describe('BoredApeBoardComponent', () => {
  let component: BoredApeBoardComponent;
  let fixture: ComponentFixture<BoredApeBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredApeBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoredApeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
