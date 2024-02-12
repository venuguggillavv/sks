import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { buttons } from '../contant/buttons.componen';
// import { imgs } from '../contant/imgs/imgs.componen';
import { en } from '../contant/content.component';
import { NavgationComponent } from '../navgation/navgation.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SadhanaComponent } from '../../components/sadhana/sadhana.component';
import { AboutCourseComponent } from '../../components/about-course/about-course.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { DonationsComponent } from '../../components/donations/donations.component';

@Component({
    selector: 'sks-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    imports: [
      RouterOutlet, 
      NavgationComponent, 
      HeroComponent, 
      SadhanaComponent,
      AboutCourseComponent,
      GalleryComponent,
      TestimonialsComponent,
      DonationsComponent,
      FooterComponent
    ]
})
export class LayoutComponent {

  constructor(
    ) { }
  contant: any;
  imgs: any;
  buttons: any;

  anyData: string | undefined;
  popup:any = {};
  showPopup:boolean = false;
  ngOnInit(): void
    {
      this.contant = en;
      this.buttons = buttons;
      // this.imgs = imgs;

    }


}
