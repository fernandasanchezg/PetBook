import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageService } from '../image.service';

import { GalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
/*   let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 */
  let component: GalleryComponent;
  let service : ImageService;
  let fixture: ComponentFixture<GalleryComponent>;
  //const service = new ImageService();
  beforeEach(() => {
    //service = new ImageService();
    //component = new GalleryComponent(service);

     // refine the test module by declaring the test component
     TestBed.configureTestingModule({
      declarations: [GalleryComponent],
      providers: [ImageService]
    });

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ImageService);
  });

  it('Componente creado', () => {
    service = new ImageService();
    component = new GalleryComponent(service);
    expect(component).toBeTruthy();
  });

   it('Todas las imagenes son perro', () => {
     //Sin terminar
     
     
     //component.ngOnChanges();
     //FOR allimages
     // expect(imagen.brand).toBe("perro"); 
     //ENDFOR
     component.filterBy = 'perro';
     fixture.detectChanges();
     component.ngOnChanges();
     for (let imagen of component.allImages){
      expect(imagen.brand).toBe("perro"); 
     }
  });

});
