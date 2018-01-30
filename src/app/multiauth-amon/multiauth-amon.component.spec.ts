import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiauthAmonComponent } from './multiauth-amon.component';

describe('MultiauthAmonComponent', () => {
  let component: MultiauthAmonComponent;
  let fixture: ComponentFixture<MultiauthAmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiauthAmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiauthAmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
