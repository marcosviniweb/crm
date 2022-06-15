import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFunilComponent } from './todos-funil.component';

describe('TodosFunilComponent', () => {
  let component: TodosFunilComponent;
  let fixture: ComponentFixture<TodosFunilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosFunilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosFunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
