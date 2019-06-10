import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputoutputComponent } from './inputoutput.component';

describe('InputoutputComponent', () => {
  let component: InputoutputComponent;
  let fixture: ComponentFixture<InputoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
