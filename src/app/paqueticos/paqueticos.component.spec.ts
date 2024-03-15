import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueticosComponent } from './paqueticos.component';

describe('PaqueticosComponent', () => {
  let component: PaqueticosComponent;
  let fixture: ComponentFixture<PaqueticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaqueticosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaqueticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
