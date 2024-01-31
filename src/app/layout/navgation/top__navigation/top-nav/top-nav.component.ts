import { Component } from '@angular/core';
import { buttons } from '../../../contant/buttons.componen';
import { en } from '../../../contant/content.component';
import { imgs } from '../../../contant/imgs/imgs.componen';
import { appendImgs } from '../../../../core/appendImgs';
import { MenuItem } from '../../../../services/types/menu.types';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
interface Network {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'emoney-top-nav',
  standalone: true,
  imports: [RouterModule,MatMenuModule,FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  contant: any;
  selectedValue: string | undefined;
  menuItems: MenuItem[] = [];
  imgs: any;
  buttons: any;
  networks: Network[] = [
    {value: 'testnet-0', viewValue: 'Testnet'},
    // {value: 'devnet-1', viewValue: 'Devnet'},
  ];
  ngOnInit(): void
    {
      this.selectedValue = this.networks[0].value
      this.contant = en;
      this.buttons = buttons;
      this.imgs = imgs;
      this.menuItems = appendImgs( this.contant.leftSideMenus.Menus)
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
