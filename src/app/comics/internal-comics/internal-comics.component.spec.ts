import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalComicsComponent } from './internal-comics.component';

describe('InternalComicsComponent', () => {
  let component: InternalComicsComponent;
  let fixture: ComponentFixture<InternalComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
