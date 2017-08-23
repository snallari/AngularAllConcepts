import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactformsComponent } from './reactforms.component';

describe('ReactformsComponent', () => {
  let component: ReactformsComponent;
  let fixture: ComponentFixture<ReactformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
