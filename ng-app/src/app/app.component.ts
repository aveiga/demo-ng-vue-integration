import { Component, Renderer, OnInit, Inject, ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'This is an Angular app simulating the Dashboard!';
  show = true;
  scriptTag = null;

  //Widget metadata that can and should be retrieved from a service
  widgetURL = "http://localhost:8080/build.js";
  widgetContainerId = "app";

  constructor(
    private _renderer2: Renderer,
    @Inject(DOCUMENT) private _document,
    private elementRef:ElementRef) {   
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.querySelector('#widget-wrapper').innerHTML = this.buildWidgetContainerHTML();
  }

  toggleScript() {
    if(this.elementRef.nativeElement.querySelector('script')) {

      this.elementRef.nativeElement.removeChild(this.scriptTag);
      this.elementRef.nativeElement.querySelector('#widget-wrapper').innerHTML = this.buildWidgetContainerHTML();
    } else {

      this.scriptTag = document.createElement("script");
      this.scriptTag.type = "text/javascript";
      this.scriptTag.src = this.widgetURL;
      this.elementRef.nativeElement.appendChild(this.scriptTag);
    }

  }

  toggleWidget() {
    this.show = !this.show;
  }

  buildWidgetContainerHTML () {
    return "<div id='" + this.widgetContainerId + "'></div>";
  }
}
