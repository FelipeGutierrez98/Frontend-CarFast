import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderCarroComponent } from './vender-carro.component';

describe('VenderCarroComponent', () => {
  let component: VenderCarroComponent;
  let fixture: ComponentFixture<VenderCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderCarroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
