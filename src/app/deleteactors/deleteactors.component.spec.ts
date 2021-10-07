import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteactorsComponent } from './deleteactors.component';

describe('DeleteactorsComponent', () => {
  let component: DeleteactorsComponent;
  let fixture: ComponentFixture<DeleteactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteactorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
