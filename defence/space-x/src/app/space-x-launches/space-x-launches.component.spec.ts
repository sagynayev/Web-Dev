import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXLaunchesComponent } from './space-x-launches.component';

describe('SpaceXLaunchesComponent', () => {
  let component: SpaceXLaunchesComponent;
  let fixture: ComponentFixture<SpaceXLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceXLaunchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceXLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
