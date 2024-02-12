import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sks-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit{
  @ViewChild('carousel') carousel!: ElementRef;
  Arr = Array;
  verticalLoop = 400;
  timeRunning = 3000;
  timeAutoNext = 7000;
  carouselDom:any;
  SliderDom:any;
  thumbnailBorderDom:any;
  thumbnailItemsDom:any;


    gallery:any = [
      { 
        "id": "1",
        "defaultTittle": "Gallery",
        "author": "LUNDEV",
        "title": "DESIGN SLIDER",
        "topic":"ANIMAL",
        "des":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "imgSrc": "assets/gallery/img1.jpg",
        "externalLink": false,
        "disabled": false,
        "btnDisabled": false,
        "link": "/home"
      },
      { 
        "id": "2",
        "defaultTittle": "Gallery",
        "author": "LUNDEV",
        "title": "DESIGN SLIDER",
        "topic":"ANIMAL",
        "des":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "imgSrc": "assets/gallery/img2.jpg",
        "externalLink": false,
        "disabled": false,
        "btnDisabled": false,
        "link": "/home"
      },
      { 
        "id": "3",
        "defaultTittle": "Gallery",
        "author": "LUNDEV",
        "title": "DESIGN SLIDER",
        "topic":"ANIMAL",
        "des":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "imgSrc": "assets/gallery/img3.jpg",
        "externalLink": false,
        "disabled": false,
        "btnDisabled": false,
        "link": "/home"
      },
      { 
        "id": "4",
        "defaultTittle": "Gallery",
        "author": "LUNDEV",
        "title": "DESIGN SLIDER",
        "topic":"ANIMAL",
        "des":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "imgSrc": "assets/gallery/img4.jpg",
        "externalLink": false,
        "disabled": false,
        "btnDisabled": false,
        "link": "/home"
      },

    ]


  ngOnInit(): void
    {
      // console.log( window.innerWidth);
      this.verticalLoop = 2560 / 2
      this.carouselDom = document.querySelector('.carousel');
      this.SliderDom = this.carouselDom.querySelector('.carousel .list');
      this.thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
      this.thumbnailItemsDom = this.thumbnailBorderDom.querySelectorAll('.item');
      // this.thumbnailBorderDom.appendChild(this.thumbnailItemsDom[0]);
    }

  next(): void {
    this.showSlider('next')
  }
  prev(): void {
    this.showSlider('prev')
  }
  showSlider(type: any){
    let carousel = this.carousel.nativeElement
    let SliderItemsDom = carousel.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = carousel.querySelectorAll('.carousel .thumbnail .item');
    
    // console.log('this.SliderDom', this.SliderDom)


    
    if(type === 'next'){
        this.SliderDom.appendChild(SliderItemsDom[0]);
        this.thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        this.carouselDom.classList.add('next');
    }else{
      this.SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      this.thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      this.carouselDom.classList.add('prev');
    }
    clearTimeout(this.runTimeOut);
    this.runTimeOut = setTimeout(() => {
      this.carouselDom.classList.remove('next');
      this.carouselDom.classList.remove('prev');
    }, this.timeRunning);

    clearTimeout(this.runNextAuto);
    this.runNextAuto = setTimeout(() => {
        this.next();
    }, this.timeAutoNext)
  }

runTimeOut:any;
runNextAuto = setTimeout(() => {
    this.next();
}, this.timeAutoNext)
}
