import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteResuelveYaComponent } from './reporte-resuelve-ya.component';

describe('ReporteResuelveYaComponent', () => {
  let component: ReporteResuelveYaComponent;
  let fixture: ComponentFixture<ReporteResuelveYaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteResuelveYaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteResuelveYaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
