import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonfestoComponent } from './bonfesto.component';

describe('BonfestoComponent', () => {
  let component: BonfestoComponent;
  let fixture: ComponentFixture<BonfestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonfestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonfestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
