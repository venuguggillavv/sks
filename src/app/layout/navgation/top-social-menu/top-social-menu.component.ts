import { Component } from '@angular/core';
import { appendImgs } from '../../../core/appendImgs';
import { en } from '../../contant/content.component';
import { imgs } from '../../contant/imgs/imgs.componen';
import { MenuItem } from '../top-nav/menu.types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sks-top-social-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-social-menu.component.html',
  styleUrl: './top-social-menu.component.scss'
})
export class TopSocialMenuComponent {
  contant: any;
  selectedValue: string | undefined;
  menuItems: MenuItem[] = [];
  imgs: any;

  ngOnInit(): void
    {
      this.contant = en;
      this.imgs = imgs;
      this.menuItems = appendImgs( this.contant.topSocialMenus.Menus)
    }
  buttonClick(event: any): void {
    // console.log(event)
    if(event.externalLink){

    }
  }
  menus(menu: any){
    // console.log(menu);
    if(menu.externalLink){
      // window.open("https://www.google.com", "_blank");
      window.open(`${menu.link}`, `${menu.target}`);
    }
  }
}
