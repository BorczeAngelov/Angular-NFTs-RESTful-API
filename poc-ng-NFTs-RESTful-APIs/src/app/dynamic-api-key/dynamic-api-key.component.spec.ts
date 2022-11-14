import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicApiKeyComponent } from './dynamic-api-key.component';

describe('DynamicApiKeyComponent', () => {
  let component: DynamicApiKeyComponent;
  let fixture: ComponentFixture<DynamicApiKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicApiKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicApiKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
