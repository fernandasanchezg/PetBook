import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  it('Se crea la instancia de FilterimagesPipe', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });

  it('Debe Filtrar el string "perro" de la lista de  imagenes', () => {
    const pipe = new FilterimagesPipe();
    const Imagesdelatils = [    
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }
    ]; 
    let imagenes = pipe.transform(Imagesdelatils , "perro");

    for (let imagen of imagenes ){
      expect(imagen.brand).toBe("perro"); 
     }
    
  });

  
  it('Debe Filtrar el string "gato" de la lista de  imagenes', () => {
    const pipe = new FilterimagesPipe();
    const Imagesdelatils = [    
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }
    ]; 
    let imagenes = pipe.transform(Imagesdelatils , "gato");

    for (let imagen of imagenes ){
      expect(imagen.brand).toBe("gato"); 
     }
    
  });

  it('No debe Filtrar el string "all" de la lista de  imagenes ,debe traer todas', () => {
    const pipe = new FilterimagesPipe();
    const Imagesdelatils = [    
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }
    ]; 
    let imagenes = pipe.transform(Imagesdelatils , "all");
    expect(imagenes.length).toBe(5); 
  });

});
