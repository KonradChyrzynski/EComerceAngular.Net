import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToFavoriteComponent } from './add-item-to-favorite.component';

describe('AddItemToFavoriteComponent', () => {
  let component: AddItemToFavoriteComponent;
  let fixture: ComponentFixture<AddItemToFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemToFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemToFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
