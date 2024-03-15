import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarResuelveYaComponent } from './enviar-resuelve-ya.component';

describe('EnviarResuelveYaComponent', () => {
  let component: EnviarResuelveYaComponent;
  let fixture: ComponentFixture<EnviarResuelveYaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarResuelveYaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnviarResuelveYaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
