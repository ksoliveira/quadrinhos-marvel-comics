import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Marvel Comics'`, () => {
    expect(app.title).toEqual('Marvel Comics');
  });

  /*
    Enable it after implement Add to Favorite

  it('should render Comics Button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#comic-header-link-button').textContent).toContain('Comics');
  });

  it('should render Favorites Button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#favorite-header-link-button').textContent).toContain('Favorites');
  }); 
  
  */

  it('should render Marvel SVG logo', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#main header svg')).not.toBeNull();
  });

  it('should render footer text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#main footer p').textContent).toContain('Todos os direitos reservados');
  });
});
