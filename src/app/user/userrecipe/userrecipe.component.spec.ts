import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrecipeComponent } from './userrecipe.component';

describe('UserrecipeComponent', () => {
  let component: UserrecipeComponent;
  let fixture: ComponentFixture<UserrecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserrecipeComponent]
    });
    fixture = TestBed.createComponent(UserrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
