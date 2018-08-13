import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionviewComponent } from './regionview.component';

describe('RegionviewComponent', () => {
  let component: RegionviewComponent;
  let fixture: ComponentFixture<RegionviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
