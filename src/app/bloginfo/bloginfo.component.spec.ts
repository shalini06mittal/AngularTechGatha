import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloginfoComponent } from './bloginfo.component';

describe('BloginfoComponent', () => {
  let component: BloginfoComponent;
  let fixture: ComponentFixture<BloginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
