import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSeguroComponent } from './consultar-seguro.component';

describe('ConsultarSeguroComponent', () => {
  let component: ConsultarSeguroComponent;
  let fixture: ComponentFixture<ConsultarSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarSeguroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
