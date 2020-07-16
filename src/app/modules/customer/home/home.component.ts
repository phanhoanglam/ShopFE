import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private titleService:Title){
    this.titleService.setTitle("Trang chủ");
  }

  // @ViewChild(CarouselComponent, {static: false}) carousel: CarouselComponent;

  // animationType = AnimationType.Fade;

  // animationTypes = [
  //   {
  //     name: "Scale",
  //     value: AnimationType.Scale
  //   },
  //   {
  //     name: "Fade",
  //     value: AnimationType.Fade
  //   },
  //   {
  //     name: "Flip",
  //     value: AnimationType.Flip
  //   },
  //   {
  //     name: "Jack In The Box",
  //     value: AnimationType.JackInTheBox
  //   }
  // ];
  // slides: Slide[] = [
  //   {
  //     headline: "For Your Current Mood",
  //     src:
  //       "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  //   },
  //   {
  //     headline: "Miouw",
  //     src:
  //       "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
  //   },
  //   {
  //     headline: "In The Wilderness",
  //     src:
  //       "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80"
  //   },
  //   {
  //     headline: "Focus On The Writing",
  //     src:
  //       "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
  //   }
  // ];

  // constructor() {}

  // setAnimationType(type) {
  //   this.animationType = type.value;
  //   setTimeout(() => {
  //     this.carousel.onNextClick();
  //   });
  // }
}
