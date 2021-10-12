import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComicsComponent } from './comics.component';
import { ComicsService } from './comics.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComicsServiceMock } from 'mocks/classes/comics/comics.service.mock';

describe('ComicsComponent', () => {
  let component: ComicsComponent;
  let fixture: ComponentFixture<ComicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: ComicsService},
        {provide: ComicsService, useClass: ComicsServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 comics objects loaded', waitForAsync(() => {
    component.comics$.subscribe(success => {
      expect(success.length).toEqual(10);
    })
  }));

  it(`should the first comic have as title 'Marvel Previews (2017)'`, waitForAsync(() => {
    component.comics$.subscribe(success => {
      expect(success[0].title).toEqual('Marvel Previews (2017)');
    })
  }));

  it('should the first comic not have a description', waitForAsync(() => {
    component.comics$.subscribe(success => {
      expect(success[0].description).toBeNull();
    })
  }));

  it('should the first comic have only 1 creator', waitForAsync(() => {
    component.comics$.subscribe(success => {
      expect(success[0].creators.items.length).toEqual(1);
    })
  }));

});
