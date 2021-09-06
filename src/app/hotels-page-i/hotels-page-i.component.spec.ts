import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsPageIComponent } from './hotels-page-i.component';

describe('HotelsPageIComponent', () => {
  let component: HotelsPageIComponent;
  let fixture: ComponentFixture<HotelsPageIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsPageIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsPageIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
