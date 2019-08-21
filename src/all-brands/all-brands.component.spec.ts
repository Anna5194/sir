import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBrandsComponent } from './all-brands.component';

describe('AllBrandsComponent', () => {
  let component: AllBrandsComponent;
  let fixture: ComponentFixture<AllBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
