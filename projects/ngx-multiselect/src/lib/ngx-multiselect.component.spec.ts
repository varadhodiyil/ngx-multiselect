import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMultiselectComponent } from './ngx-multiselect.component';

describe('NgxMultiselectComponent', () => {
  let component: NgxMultiselectComponent;
  let fixture: ComponentFixture<NgxMultiselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMultiselectComponent]
    });
    fixture = TestBed.createComponent(NgxMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
