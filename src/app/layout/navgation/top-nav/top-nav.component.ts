import { Component } from '@angular/core';
import { en } from '../../contant/content.component';
import { imgs } from '../../contant/imgs/imgs.componen';
import { appendImgs } from '../../../core/appendImgs';
import { MenuItem } from './menu.types';
import { RouterModule } from '@angular/router';
interface Network {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'sks-top-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  contant: any;
  selectedValue: string | undefined;
  menuItems: MenuItem[] = [];
  imgs: any;

  ngOnInit(): void
    {
      this.contant = en;
      this.imgs = imgs;
      this.menuItems = appendImgs( this.contant.topMainMenus.Menus)
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
