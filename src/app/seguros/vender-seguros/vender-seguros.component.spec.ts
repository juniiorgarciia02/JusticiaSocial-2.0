import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderSegurosComponent } from './vender-seguros.component';

describe('VenderSegurosComponent', () => {
  let component: VenderSegurosComponent;
  let fixture: ComponentFixture<VenderSegurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenderSegurosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenderSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
