import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillmonteComponent } from './villmonte.component';

describe('VillmonteComponent', () => {
  let component: VillmonteComponent;
  let fixture: ComponentFixture<VillmonteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillmonteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillmonteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
