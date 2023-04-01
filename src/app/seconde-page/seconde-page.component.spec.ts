import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondePageComponent } from './seconde-page.component';

describe('SecondePageComponent', () => {
  let component: SecondePageComponent;
  let fixture: ComponentFixture<SecondePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
