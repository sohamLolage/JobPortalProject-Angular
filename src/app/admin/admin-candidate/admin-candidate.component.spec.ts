import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCandidateComponent } from './admin-candidate.component';

describe('AdminCandidateComponent', () => {
  let component: AdminCandidateComponent;
  let fixture: ComponentFixture<AdminCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
