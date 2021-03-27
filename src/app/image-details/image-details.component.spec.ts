import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageService } from '../image.service';

import { ImageDetailComponent } from './image-details.component';


describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ ImageDetailComponent ],
      providers:[ImageService ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
   // imageservice = TestBed.inject(ImageService);
//    fixture.detectChanges();
  });

  it('should create', () => {
  //  fixture = TestBed.createComponent(ImageDetailComponent);
   // component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  
});