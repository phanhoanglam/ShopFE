import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-carousel',
  templateUrl: './slide-carousel.component.html',
  styleUrls: ['./slide-carousel.component.css']
})
export class SlideCarouselComponent implements OnInit {

  @Input() nodes;

  myCarouselImages = ['../assets/images/image1.jpg', '../assets/images/image2.jpeg', '../assets/images/image3.jpg'];

  mySlideOptions = { items: 1, dots: true, nav: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  constructor() { }

  ngOnInit() {
  }

}
