import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSupervisorComponent } from './detalle-supervisor.component';

describe('DetalleSupervisorComponent', () => {
  let component: DetalleSupervisorComponent;
  let fixture: ComponentFixture<DetalleSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSupervisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
