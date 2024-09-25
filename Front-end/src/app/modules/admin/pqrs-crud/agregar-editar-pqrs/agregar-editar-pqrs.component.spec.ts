import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarPqrsComponent } from './agregar-editar-pqrs.component';

describe('AgregarEditarPqrsComponent', () => {
  let component: AgregarEditarPqrsComponent;
  let fixture: ComponentFixture<AgregarEditarPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEditarPqrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
