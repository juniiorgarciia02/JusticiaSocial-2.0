import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagaFacilServComponent } from './paga-facil-serv.component';

describe('PagaFacilServComponent', () => {
  let component: PagaFacilServComponent;
  let fixture: ComponentFixture<PagaFacilServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagaFacilServComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagaFacilServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
