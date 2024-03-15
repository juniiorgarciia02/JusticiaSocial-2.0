import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueticoPostComponent } from './paquetico-post.component';

describe('PaqueticoPostComponent', () => {
  let component: PaqueticoPostComponent;
  let fixture: ComponentFixture<PaqueticoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaqueticoPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaqueticoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
