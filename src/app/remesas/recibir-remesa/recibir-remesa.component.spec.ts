import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirRemesaComponent } from './recibir-remesa.component';

describe('RecibirRemesaComponent', () => {
  let component: RecibirRemesaComponent;
  let fixture: ComponentFixture<RecibirRemesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecibirRemesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecibirRemesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
