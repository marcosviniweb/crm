import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLandingPageComponent } from './editar-landing-page.component';

describe('EditarLandingPageComponent', () => {
  let component: EditarLandingPageComponent;
  let fixture: ComponentFixture<EditarLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
