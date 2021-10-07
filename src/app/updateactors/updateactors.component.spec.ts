import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactorsComponent } from './updateactors.component';

describe('UpdateactorsComponent', () => {
  let component: UpdateactorsComponent;
  let fixture: ComponentFixture<UpdateactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateactorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
