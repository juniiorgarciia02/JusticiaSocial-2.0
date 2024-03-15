import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagaFacilComponent } from './paga-facil.component';

describe('PagaFacilComponent', () => {
  let component: PagaFacilComponent;
  let fixture: ComponentFixture<PagaFacilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagaFacilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagaFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
