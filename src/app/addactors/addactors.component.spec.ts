import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactorsComponent } from './addactors.component';

describe('AddactorsComponent', () => {
  let component: AddactorsComponent;
  let fixture: ComponentFixture<AddactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddactorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
