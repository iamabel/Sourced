import { Component, ElementRef, Renderer } from '@angular/core';
import { Platform, DomController } from 'ionic-angular';

@Component({
  selector: 'bottom-drawer',
  templateUrl: 'bottom-drawer.html'
})
export class BottomDrawer {
  handleHeight: number = 75;
  bounceBack: boolean = true;
  thresholdTop: number = 200;
  thresholdBottom: number = 200;

  constructor(public element: ElementRef, public renderer: Renderer,
              public domCtrl: DomController, public platform: Platform) {

  }

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });

  }

  handlePan(ev){

    let newTop = ev.center.y;

    let bounceToBottom = false;
    let bounceToTop = false;

    if(this.bounceBack && ev.isFinal){

      let topDiff = newTop - this.thresholdTop;
      let bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;

      topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;

    }

    if((newTop < this.thresholdTop && ev.additionalEvent === "panup") || bounceToTop){

      this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height()*.2);
      });

    } else if(((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === "pandown") || bounceToBottom){

      this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
      });

    } else {

      this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'none');

      if(newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {

        if(ev.additionalEvent === "panup" || ev.additionalEvent === "pandown"){

          this.domCtrl.write(() => {
            this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
          });

        }

      }

    }

  }

}
