import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepersonajesComponent } from './detallepersonajes.component';

describe('DetallepersonajesComponent', () => {
  let component: DetallepersonajesComponent;
  let fixture: ComponentFixture<DetallepersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallepersonajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallepersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
