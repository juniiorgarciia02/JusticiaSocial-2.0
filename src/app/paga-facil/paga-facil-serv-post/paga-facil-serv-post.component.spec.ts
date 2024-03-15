import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagaFacilServPostComponent } from './paga-facil-serv-post.component';

describe('PagaFacilServPostComponent', () => {
  let component: PagaFacilServPostComponent;
  let fixture: ComponentFixture<PagaFacilServPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagaFacilServPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagaFacilServPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
