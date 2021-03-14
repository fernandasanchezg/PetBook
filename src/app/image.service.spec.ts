import { debug } from 'console';
import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

    it('should be created', () => {
    expect(service).toBeTruthy();
    });
  describe('getImages', () =>{ 
    it("#getImages debe traer todas las imagenes y deben ser 5", () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toBe(5);

    });
  });

  describe('getImage(x)', () => {
    it('debe retornar una imagen con la información COMPLETA cuando el id existe en las imagenes', () => {
      let imagen = service.getImage(2);
      expect(imagen.id).toBe(2);
      expect(imagen.brand).toBe("perro");
      expect(imagen.url).toBe("assets/images/perro2.jpg");

    });
    it('debe retornar indefinido si se busca una imagen con id que NO existe', () => {
      let imagene = service.getImage(100);
      expect(imagene).toEqual(undefined);
 
    });
  
    
    it('debe retornar indefinido si se busca una imagen con id decimal', () => {
      let imagene1 = service.getImage(0.048);
      expect(imagene1).toEqual(undefined);  
    });
  });
   
  describe('getImageBrand(x)', () =>  {
    it(" Si el usuario escoje perro, se deben traer las imágenes asignadas a los perros. ", () => {
      let perros = service.getImageBrand("perro");
      expect(perros.brand).toBe("perro")   
    });
    
  });
});

