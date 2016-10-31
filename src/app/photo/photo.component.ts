import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  inputs: ['image']
})
export class PhotoComponent implements OnInit {
  image: {url: string, width: number, height: number};
  paddingBottom: string;

  getUrl () {
    return 'app/shared/images/' + this.image.url
    // return 'https://xieranmaya.github.io/images/cats/' + this.image.url
  }

  setImageStyle() {
    const calcWidth: number = this.image.width*200/this.image.height;

    let styles = {
      'width':  calcWidth + 'px',
      'flex-grow': calcWidth,
    };
    return styles;
  }

  setPaddingBottom() {
    console.log('here')
    return { 'padding-bottom': this.image.height/this.image.width*100 + '%'}
  }

  constructor() { }

  ngOnInit() {
    this.paddingBottom = this.image.height/this.image.width*100 + '%';
  }

}
