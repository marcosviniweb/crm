import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoFunilComponent } from './novo-funil.component';

describe('NovoFunilComponent', () => {
  let component: NovoFunilComponent;
  let fixture: ComponentFixture<NovoFunilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoFunilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoFunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
