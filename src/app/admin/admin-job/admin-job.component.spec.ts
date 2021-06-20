import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobComponent } from './admin-job.component';

describe('AdminJobComponent', () => {
  let component: AdminJobComponent;
  let fixture: ComponentFixture<AdminJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
