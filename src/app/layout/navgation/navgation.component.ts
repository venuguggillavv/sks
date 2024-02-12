import { Component, HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { imgs } from '../contant/imgs/imgs.componen';
import { en } from '../contant/content.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopSocialMenuComponent } from './top-social-menu/top-social-menu.component';

@Component({
  selector: 'sks-navgation',
  standalone: true,
  imports: [ RouterModule, TopNavComponent, TopSocialMenuComponent],
  templateUrl: './navgation.component.html',
})

export class NavgationComponent {
  imgs: any;
  contant: any;
  // @ViewChild(MatMenuTrigger) menu!: MatMenuTrigger;
  screenWidth: number | undefined;
  private screenWidth$ = new BehaviorSubject<number>(0);
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  ngOnInit(): void
    {
      this.imgs = imgs;
      this.contant = en;
      this.getScreenWidth().subscribe((width: any) => {
        if (width > 990) {
          try {
            console.log('getScreenWidth');
            
            // this.menu.closeMenu();
          } catch (error) { 
           console.log(error)
          }
       }
      });
    }
    getScreenWidth(): Observable<number> {
      return this.screenWidth$.asObservable();
    }
    closeMenu():void {
      // this.menu.closeMenu();
    }
}
