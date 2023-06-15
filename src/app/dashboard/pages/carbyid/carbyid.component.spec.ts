import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbyidComponent } from './carbyid.component';

describe('CarbyidComponent', () => {
  let component: CarbyidComponent;
  let fixture: ComponentFixture<CarbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
