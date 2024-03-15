import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarResuelveYaComponent } from './entregar-resuelve-ya.component';

describe('EntregarResuelveYaComponent', () => {
  let component: EntregarResuelveYaComponent;
  let fixture: ComponentFixture<EntregarResuelveYaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregarResuelveYaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntregarResuelveYaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
