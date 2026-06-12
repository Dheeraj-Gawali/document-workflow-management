import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalTreeComponent } from './approval-tree-component';

describe('ApprovalTreeComponent', () => {
  let component: ApprovalTreeComponent;
  let fixture: ComponentFixture<ApprovalTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
