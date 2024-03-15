import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardCompraComponent } from './gift-card-compra.component';

describe('GiftCardCompraComponent', () => {
  let component: GiftCardCompraComponent;
  let fixture: ComponentFixture<GiftCardCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftCardCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftCardCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
