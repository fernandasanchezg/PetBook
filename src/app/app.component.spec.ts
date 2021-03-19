import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

xdescribe('AppComponent', () => {
/*   beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  })); */

  let app: AppComponent;
  beforeEach(() => {
        app = new AppComponent();
  });

  it('debe crear la app', () => {
    expect(app).toBeTruthy();
  });

  it('debe tener el título "pet-book" ', () => {
    expect(app.title).toEqual('pet-book');
  });

 xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('pet-book app is running!');
  });
});
