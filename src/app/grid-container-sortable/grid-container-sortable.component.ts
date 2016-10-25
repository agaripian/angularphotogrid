import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';
import {imagesArray} from '../shared/images';


@Component({
  selector: 'app-grid-container-sortable',
  templateUrl: './grid-container-sortable.component.html',
  styleUrls: ['./grid-container-sortable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridContainerSortableComponent implements OnInit {

 styles:any = [];
 images = imagesArray;

  options: SortablejsOptions = {
     animation: 150,
     ghostClass: 'separator',
     delay: 100

   //  chosenClass: 'gu-mirror'

   };

  constructor() {

  }

  ngOnInit() {

   this.images.forEach(element => {
     const calcWidth: number = element.width*200/element.height;
     this.styles[element.url] = {
      'width':  calcWidth + 'px',
      'flex-grow': calcWidth,
    };
  });
  }
}
