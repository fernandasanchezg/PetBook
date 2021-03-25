import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageService } from '../image.service';

import { GalleryComponent } from './image-gallery.component';


xdescribe('ImageGalleryComponent', () => {
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
    service = new ImageService();
    component = new GalleryComponent(service);

  });

  it('Componente creado', () => {
//    service = new ImageService();
//    component = new GalleryComponent(service );
    expect(component).toBeTruthy();
  });

   it('Todas las imagenes filtradas son perro', () => {
     //Sin terminar
     
     component.filterBy = "perro";
     component.ngOnChanges();
     for (let imagen of component.allImages ){
      expect(imagen.brand).toBe("perro"); 
     }
  });

  it('Todas las imagenes filtradas son gato', () => {
    //Sin terminar
    
    component.filterBy = "gato";
    component.ngOnChanges();
    for (let imagen of component.allImages ){
     expect(imagen.brand).toBe("gato"); 
    }
 });

 it('El Filtro perro debe corresponder al nombre del  boton Perro', () => {
  //Sin terminar
  
  
  component.ngOnChanges();
  for (let imagen of component.allImages ){
   expect(imagen.brand).toBe("gato"); 
  }
});


});
