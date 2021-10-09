import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteMock } from 'mocks/classes/router/activate.route.mock';

import { InternalComicsComponent } from './internal-comics.component';

describe('InternalComicsComponent', () => {
  let component: InternalComicsComponent;
  let fixture: ComponentFixture<InternalComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalComicsComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteMock}
      ]
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
  
  it(`should render Thumbnail 'Back to list' button`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.row-item-image img').src).toEqual('http://i.annihil.us/u/prod/marvel/i/mg/6/c0/59079911f0fdb.jpg');
  }); 
  
  it('should render Thumbnail Image', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.btn-back')).not.toBeNull();
  }); 

  it('should have comic object loaded', () => {
    expect(component.comic).toBeTruthy();
  });
  
  it(`should have as title 'Ultimate Spider-Man Ultimate Collection Book 1 (Trade Paperback)'`, () => {
    expect(component.comic.title).toEqual('Ultimate Spider-Man Ultimate Collection Book 1 (Trade Paperback)');
  });

  it(`should have as published '2029-12-31T00:00:00-0500'`, () => {
    expect(component.publishedDate).toEqual('2029-12-31T00:00:00-0500');
  });

  it('should have 10 Creators', () => {
    expect(component.comic.creators.items.length).toEqual(10);
  });

  it(`should the first creator to be a 'colorist' named 'Jc'`, () => {
    expect(component.comic.creators.items[0].name).toEqual('Jc');
    expect(component.comic.creators.items[0].role).toEqual('colorist');
  });

  it(`should contain on description 'Collecting the groundbreaking first year of Ultimate Spider-Man in one'`, () => {
    expect(component.comic.description).toContain('Collecting the groundbreaking first year of Ultimate Spider-Man in one');
    
  });
});
