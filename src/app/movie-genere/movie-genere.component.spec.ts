import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenereComponent } from './movie-genere.component';

describe('MovieGenereComponent', () => {
  let component: MovieGenereComponent;
  let fixture: ComponentFixture<MovieGenereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGenereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
