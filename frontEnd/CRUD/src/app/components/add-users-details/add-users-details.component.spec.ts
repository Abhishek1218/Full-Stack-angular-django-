import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersDetailsComponent } from './add-users-details.component';

describe('AddUsersDetailsComponent', () => {
  let component: AddUsersDetailsComponent;
  let fixture: ComponentFixture<AddUsersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
