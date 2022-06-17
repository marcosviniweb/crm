import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVendedorComponent } from './detalhes-vendedor.component';

describe('DetalhesVendedorComponent', () => {
  let component: DetalhesVendedorComponent;
  let fixture: ComponentFixture<DetalhesVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
