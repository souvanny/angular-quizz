import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContributesComponent } from './all-contributes.component';

describe('AllContributesComponent', () => {
  let component: AllContributesComponent;
  let fixture: ComponentFixture<AllContributesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllContributesComponent]
    });
    fixture = TestBed.createComponent(AllContributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
