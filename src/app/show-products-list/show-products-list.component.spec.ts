import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsListComponent } from './show-products-list.component';

describe('ShowProductsListComponent', () => {
  let component: ShowProductsListComponent;
  let fixture: ComponentFixture<ShowProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
