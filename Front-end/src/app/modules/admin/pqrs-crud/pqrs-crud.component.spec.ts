import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsCrudComponent } from './pqrs-crud.component';

describe('PqrsCrudComponent', () => {
  let component: PqrsCrudComponent;
  let fixture: ComponentFixture<PqrsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PqrsCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqrsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
