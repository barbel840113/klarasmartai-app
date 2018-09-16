
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomDataComponent } from './app-custom-data.component';

describe('AppCustomDataComponent', () => {
  let component: AppCustomDataComponent;
  let fixture: ComponentFixture<AppCustomDataComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCustomDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCustomDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
