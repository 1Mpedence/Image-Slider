import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  imageIdx = 0;

  images = [
    {
      id: 0,
      author: 'Alejandro Escamilla',
      download_url: 'https://picsum.photos/id/320/5000/3750',
      left: 0,
    },
    {
      id: 1,
      author: 'Alejandro Escamilla',
      download_url: 'https://picsum.photos/id/321/5000/3750',
      left: 0,
    },
    {
      id: 2,
      author: 'Alejandro Escamilla',
      download_url: 'https://picsum.photos/id/322/5000/3750',
      left: 0,
    },
    {
      id: 3,
      author: 'Alejandro Escamilla',
      download_url: 'https://picsum.photos/id/323/5000/3750',
      left: 0,
    },
    {
      id: 4,
      author: 'Alejandro Escamilla',
      download_url: 'https://picsum.photos/id/324/5000/3750',
      left: 0,
    },
  ];

  automaticTansition = false;

  toggleInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.images.forEach((image, idx) => {
      image.left = idx * 100;
    });
  }

  onToggleChange(){
    this.automaticTansition = !this.automaticTansition;
    if(this.automaticTansition){
      this.toggleInterval = setInterval(() => this.sliderBtn(1), 2000);
    } else {
      clearInterval(this.toggleInterval);
    }
  }

  sliderBtn(dir: -1 | 1) {
    this.imageIdx = (this.imageIdx + dir + this.images.length) % this.images.length;
  }

  selectImage(idx: number) {
    this.imageIdx = idx;
  }
}
