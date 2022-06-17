import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaLandingPageComponent } from './nova-landing-page.component';

describe('NovaLandingPageComponent', () => {
  let component: NovaLandingPageComponent;
  let fixture: ComponentFixture<NovaLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
