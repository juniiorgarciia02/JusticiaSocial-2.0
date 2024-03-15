import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagaFacilAnularComponent } from './paga-facil-anular.component';

describe('PagaFacilAnularComponent', () => {
  let component: PagaFacilAnularComponent;
  let fixture: ComponentFixture<PagaFacilAnularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagaFacilAnularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagaFacilAnularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
