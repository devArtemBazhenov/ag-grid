import { Component } from '@angular/core';

@Component({
  selector: 'app-image-formatter',
  templateUrl: './image-formatter.component.html',
})
export class ImageFormatterComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }
}
