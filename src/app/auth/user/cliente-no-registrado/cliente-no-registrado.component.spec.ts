import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNoRegistradoComponent } from './cliente-no-registrado.component';

describe('ClienteNoRegistradoComponent', () => {
  let component: ClienteNoRegistradoComponent;
  let fixture: ComponentFixture<ClienteNoRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteNoRegistradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteNoRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
