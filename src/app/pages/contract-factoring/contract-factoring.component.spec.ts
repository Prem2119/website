import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFactoringComponent } from './contract-factoring.component';

describe('ContractFactoringComponent', () => {
  let component: ContractFactoringComponent;
  let fixture: ComponentFixture<ContractFactoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractFactoringComponent]
    });
    fixture = TestBed.createComponent(ContractFactoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
