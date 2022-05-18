import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextChangeComponent } from './text-change.component';

describe('TextChangeComponent', () => {
  let component: TextChangeComponent;
  let fixture: ComponentFixture<TextChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
