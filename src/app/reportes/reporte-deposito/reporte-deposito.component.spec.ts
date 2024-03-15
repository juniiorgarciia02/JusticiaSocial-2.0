import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDepositoComponent } from './reporte-deposito.component';

describe('ReporteDepositoComponent', () => {
  let component: ReporteDepositoComponent;
  let fixture: ComponentFixture<ReporteDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteDepositoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
