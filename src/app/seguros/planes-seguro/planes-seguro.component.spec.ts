import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesSeguroComponent } from './planes-seguro.component';

describe('PlanesSeguroComponent', () => {
  let component: PlanesSeguroComponent;
  let fixture: ComponentFixture<PlanesSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesSeguroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanesSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
