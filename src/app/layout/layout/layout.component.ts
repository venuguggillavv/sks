import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { buttons } from '../contant/buttons.componen';
// import { imgs } from '../contant/imgs/imgs.componen';
import { en } from '../contant/content.component';
import { NavgationComponent } from '../navgation/navgation.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
    selector: 'sks-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [RouterOutlet, NavgationComponent, FooterComponent, HeroComponent ]
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
