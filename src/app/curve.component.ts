/**
 * Renders a partial (or total) curve on an HTML5 canvas.
 */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'hs-curve',
  templateUrl: './curve.component.html',
  styleUrls: ['./curve.component.css'],
  // This is a dumb, stateless component with immutable inputs. We can use
  // OnPush change detection.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurveComponent implements OnInit, OnChanges {


  // Our canvas and its context.
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  // The dimensions of our canvas.
  private width = 500;
  private height = 50;

  constructor(private elRef: ElementRef) { }

  // Grab a reference to the canvas and its context from the view.
  @ViewChild('cnvs', {static: false}) set canvasRef(canvasRef: ElementRef) {
    this.canvas = canvasRef.nativeElement;
    this.ctx = canvasRef.nativeElement.getContext('2d');
  }

  // Set initial dimensions on init.
  ngOnInit() {
    this.onResize();
  }

  // Draw the curve again whenever changes occur
  // (i.e. a new "data" List has arrived)
  ngOnChanges() {
    this.draw();
  }

  // When the window is resized, recalculate our canvas dimensions and redraw.
  @HostListener('window:resize')
  onResize() {
    // The canvas will fill the width and height of the host element.
    // See what they are and set them for the canvas.
    this.width = this.elRef.nativeElement.offsetWidth;
    this.height = this.elRef.nativeElement.offsetHeight;
    // We're manually setting these instead of using property bindings in
    // the view, because we need these to be set before we invoke "draw".
    // HTML5 canvas is always cleared when its width/height is set, so
    // the order in which this happens is significant.
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.draw();
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
 
    this.ctx.strokeStyle = '#e5e5e5';


    // Draw the centerline
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.height / 2);
    this.ctx.lineTo(this.width, this.height / 2);
    this.ctx.stroke();

  }

}