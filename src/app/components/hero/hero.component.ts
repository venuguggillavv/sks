import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { Application } from './runtime.js';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'sks-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements AfterViewInit{
  url = 'assets/hero/index.html';

  ngAfterViewInit() {
    // if (typeof document !== 'undefined') {
    //   const canvas:any = document.getElementById('canvas3d');
    //   const spline = new Application(canvas);

    //   // Create an object describing the variables you want to update during load
    //   const myVariables = { myName: 'John', mySize: 350 };

    //   // And pass them as second parameter for the load function
    //   spline.load('./scene.splinecode', myVariables);

    //   // Later you can update your variables again
    //   spline.setVariables({ myName: 'Paul', mySize: 100 });

    //   // Or change only one variable
    //   spline.setVariable('myName', 'Ringo');
    // }
    if (typeof document !== 'undefined') {
      // const canvas:any = document.getElementById('canvas3d');
      // console.log(canvas)
      // const app = new Application(canvas);
      // app.load('https://prod.spline.design/YZj2Klf4lZ-KjHwH/scene.splinecode');
    }
  }
}


// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/vXiXuAkpyHdq2xVt/scene.splinecode');
