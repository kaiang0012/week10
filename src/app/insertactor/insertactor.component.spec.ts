import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertactorComponent } from './insertactor.component';

describe('InsertactorComponent', () => {
  let component: InsertactorComponent;
  let fixture: ComponentFixture<InsertactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
