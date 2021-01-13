import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 10;
  title = "";
  sumar(){
    this.counter ++;
    alert();
  }
}
