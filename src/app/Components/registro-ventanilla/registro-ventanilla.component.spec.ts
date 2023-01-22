import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVentanillaComponent } from './registro-ventanilla.component';

describe('RegistroVentanillaComponent', () => {
  let component: RegistroVentanillaComponent;
  let fixture: ComponentFixture<RegistroVentanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVentanillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVentanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
