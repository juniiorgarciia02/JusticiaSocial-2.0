import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCodigosComponent } from './reporte-codigos.component';

describe('ReporteCodigosComponent', () => {
  let component: ReporteCodigosComponent;
  let fixture: ComponentFixture<ReporteCodigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteCodigosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
