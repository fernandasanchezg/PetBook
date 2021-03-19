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
  //const service = new ImageService();
  beforeEach(() => {
    service = new ImageService();
    component = new GalleryComponent(service);
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

   it('Componente creado', () => {
     //Sin terminar
    component.ngOnChanges();
    expect(component.filterBy).toBeTruthy();
  });

});
