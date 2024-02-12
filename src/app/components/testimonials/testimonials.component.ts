import { Component } from '@angular/core';

@Component({
  selector: 'sks-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  selectedList: any;
  list:any = [
    { 
      "id": "1",
      "tittle": "UI & UX Design",
      "desShot": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      "des":"Guruji has such a great patience and love that he cares so much about the sadhaks while teaching, just like a mother. I am able to sit in meditation for around 5-6 hours sometimes and go into Samadhi states. There is a profound transformation in me and I feel a lot of bliss inside and became calmer. I cannot thank enough our Guru for blessing me with such a wonderful and divine experience. He always makes sure every sadhak is practicing the techniques properly and takes their feedback constantly.",
      "imgSrc": "assets/testimonials/testimonials01.png",
    },
    { 
      "id": "2",
      "tittle": "UI & UX Design",
      "desShot": "2Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      "des":"2 Guruji has such a great patience and love that he cares so much about the sadhaks while teaching, just like a mother. I am able to sit in meditation for around 5-6 hours sometimes and go into Samadhi states. There is a profound transformation in me and I feel a lot of bliss inside and became calmer. I cannot thank enough our Guru for blessing me with such a wonderful and divine experience. He always makes sure every sadhak is practicing the techniques properly and takes their feedback constantly.",
      "imgSrc": "assets/testimonials/testimonials02.png",
    },
    { 
      "id": "3",
      "tittle": "UI & UX Design",
      "desShot": "3Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      "des":"3Guruji has such a great patience and love that he cares so much about the sadhaks while teaching, just like a mother. I am able to sit in meditation for around 5-6 hours sometimes and go into Samadhi states. There is a profound transformation in me and I feel a lot of bliss inside and became calmer. I cannot thank enough our Guru for blessing me with such a wonderful and divine experience. He always makes sure every sadhak is practicing the techniques properly and takes their feedback constantly.",
      "imgSrc": "assets/testimonials/testimonials03.png",
    },
    { 
      "id": "4",
      "tittle": "UI & UX Design",
      "desShot": "4Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      "des":"4 Guruji has such a great patience and love that he cares so much about the sadhaks while teaching, just like a mother. I am able to sit in meditation for around 5-6 hours sometimes and go into Samadhi states. There is a profound transformation in me and I feel a lot of bliss inside and became calmer. I cannot thank enough our Guru for blessing me with such a wonderful and divine experience. He always makes sure every sadhak is practicing the techniques properly and takes their feedback constantly.",
      "imgSrc": "assets/testimonials/testimonials04.png",
    },

  ]
  ngOnInit(): void
  {
    this.selectedList = this.list[0]
  }
}
