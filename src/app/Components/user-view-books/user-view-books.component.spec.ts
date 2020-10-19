import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewBooksComponent } from './user-view-books.component';

describe('UserViewBooksComponent', () => {
  let component: UserViewBooksComponent;
  let fixture: ComponentFixture<UserViewBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
