import { Component } from '@angular/core';

@Component({
  selector: 'app-link-formatter',
  templateUrl: './link-formatter.component.html',
})
export class LinkFormatterComponent {
  params: any;

  agInit(params: any){
    this.params = params.value;
  }
}
