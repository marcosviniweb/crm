import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFunilComponent } from './edit-funil.component';

describe('EditFunilComponent', () => {
  let component: EditFunilComponent;
  let fixture: ComponentFixture<EditFunilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFunilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
