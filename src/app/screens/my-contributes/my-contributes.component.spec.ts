import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContributesComponent } from './my-contributes.component';

describe('MyContributesComponent', () => {
  let component: MyContributesComponent;
  let fixture: ComponentFixture<MyContributesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyContributesComponent]
    });
    fixture = TestBed.createComponent(MyContributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
