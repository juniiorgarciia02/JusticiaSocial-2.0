import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuelveYaComponent } from './resuelve-ya.component';

describe('ResuelveYaComponent', () => {
  let component: ResuelveYaComponent;
  let fixture: ComponentFixture<ResuelveYaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResuelveYaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResuelveYaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
