import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemesasEnviarDestinatarioComponent } from './remesas-enviar-destinatario.component';

describe('RemesasEnviarDestinatarioComponent', () => {
  let component: RemesasEnviarDestinatarioComponent;
  let fixture: ComponentFixture<RemesasEnviarDestinatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemesasEnviarDestinatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemesasEnviarDestinatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
