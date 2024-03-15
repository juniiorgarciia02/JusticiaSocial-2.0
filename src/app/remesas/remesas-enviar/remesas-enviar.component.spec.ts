import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemesasEnviarComponent } from './remesas-enviar.component';

describe('RemesasEnviarComponent', () => {
  let component: RemesasEnviarComponent;
  let fixture: ComponentFixture<RemesasEnviarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemesasEnviarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemesasEnviarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
