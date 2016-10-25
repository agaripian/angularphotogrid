import { Component, OnInit, Renderer, ViewEncapsulation} from '@angular/core';
import {DragulaService} from 'ng2-dragula/ng2-dragula';
import {imagesArray} from '../shared/images';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss'],
  viewProviders: [DragulaService],
  encapsulation: ViewEncapsulation.None
})
export class GridContainerComponent implements OnInit {

 styles:any = [];
 shadow = null;
 shouldScroll:boolean = false;
 _renderer:Renderer;
 mouseMoveListener: Function;
 mouseUpListener: Function;
 images = imagesArray;

  constructor(private dragulaService: DragulaService, renderer: Renderer) {
    this._renderer = renderer;
    this.
    dragulaService.setOptions('first-bag', {
      copy: true,
      copySortSource: true,
      removeOnSpill: true
    });
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.dragend.subscribe((value) => {
      this.onDragEnd(value.slice(1));
    });
     dragulaService.shadow.subscribe((value) => {
      this.onShadow(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

 private onShadow(args) {
    console.log('on shadowwww');

    let [el] = args;
     if (!this.shadow){
        this.shadow = this.makeElement();
       // this.shadow.classList.add("gu-transit");
    }
    el.style.display = 'none';
    el.parentNode.insertBefore(this.shadow, el);
  }

  private offsetCalc(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  private onDrag(args) {
    var self = this;
    console.log(args);
    console.log('ondrag');
    let [el, container, one, two] = args;
    // const mask = container;
    //     var h = mask.clientHeight;
    //     mask.addEventListener('touchend',function(e){
    //       mask.removeEventListener('touchmove');
    //     });

    //     ['mousemove', 'touchmove'].forEach(function(e){
    //       document.addEventListener(e, moveHandler);
    //     });

    //     function moveHandler(e) {
    //       console.log('insinde move')
    //       const offset = self.offsetCalc(mask).top;
    //       // if(DRRR.isMobile){
    //       //   e.clientY = e.originalEvent.targetTouches[0].clientY;
    //       // }
    //       var mousePosition = e.clientY - offset;
    //       //alert(mousePosition);
    //       var topRegion = 0.65 * h;
    //       var bottomRegion = 0.35 * h;
    //   //if((DRRR.isMobile || e.which == 1) && (mousePosition < topRegion || mousePosition > bottomRegion)){    // e.which = 1 => click down !
    //       if((e.which == 1) && (mousePosition < topRegion || mousePosition > bottomRegion)){    // e.which = 1 => click down !
    //         var distance = mousePosition - h / 2;
    //         distance = distance * 0.1; // <- velocity
    //         mask.scrollTop = distance + mask.scrollTop;
    //       }else{
    //         mask.removeEventListener('mousemove touchmove');
    //       }
    //     };
        debugger;
         this.addClass(el, 'gu-copy');
         this.mouseMoveListener = this._renderer.listenGlobal('document', 'mousemove', (event) => this.handleMouseMove(event));
  }

  private handleMouseMove(e){
    var h = window.innerHeight;
    var mousePosition = e.pageY - (window.pageYOffset || document.documentElement.scrollTop);
    var topRegion = 50;
    var bottomRegion = h - 50;
    if(e.which == 1 && (mousePosition < topRegion || mousePosition > bottomRegion)){    // e.wich = 1 => click down !
        if (this.shouldScroll) { return; }
        let ammount = mousePosition - h / 2;
        ammount = ammount * 0.2; // <- velocity
        this.shouldScroll = true;
        this.autoScroll(ammount)
    }else{
        console.warn('no more mouse move')
        this.shouldScroll = false;
    }
  }

  private autoScroll(ammount) {
    // TODO stop scrolling when you reached bottom of page or top
    if (!this.shouldScroll) { return; }
        console.error('autoScroll')
    document.documentElement.scrollTop = document.body.scrollTop += ammount;

    setTimeout(() =>
      this.autoScroll(ammount), 10);
  }

  private onDragEnd(args) {
    console.log('onDragEnddd')
    this.shouldScroll = false;

    this.mouseMoveListener();

    this.shadow.remove();
    this.shadow = null;
  }

  private insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
  }

  private onDrop(args) {
      console.log(args);
    console.log('onDrop');
    let [e, el, container, dropElm] = args;
    if (dropElm) {
        const image = e.cloneNode(true);
        image.style.display = '';
         this.removeClass(image, 'gu-transit');;
        e.parentNode.replaceChild(image, e);
    }

  //  this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
      console.log(args);
    console.log('onOver');

    // var guMirror = document.getElementsByClassName('gu-mirror')
    // console.log('adding class scaleDown')
    // setTimeout(function() { guMirror[0].classList.add('scaleDown'); }, 0);
    let [e, el, container] = args;
   // this.addClass(el, 'ex-over');
  }

  private onOut(args) {
      console.log(args);
    console.log('onOut');
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }

  getStyles(name) {
    return  this.styles[name];
  }

  makeElement(){
    const newNode = document.createElement("div");
    newNode.classList.add( "separator");
    return newNode;
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

   ngOnDestroy() {

    // Remove the listeners!
   this.mouseMoveListener();
  }

}
