import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoproductsComponent } from './recoproducts.component';

describe('RecoproductsComponent', () => {
  let component: RecoproductsComponent;
  let fixture: ComponentFixture<RecoproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
