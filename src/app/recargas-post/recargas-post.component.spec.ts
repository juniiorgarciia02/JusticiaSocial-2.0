import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargasPostComponent } from './recargas-post.component';

describe('RecargasPostComponent', () => {
  let component: RecargasPostComponent;
  let fixture: ComponentFixture<RecargasPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecargasPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecargasPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
