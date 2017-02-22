import { Component } from '@angular/core';
import { OtherComponent} from './other/other.component';

@Component({
  selector: 'app-root',
  template:`
  	<h1>Inline Templates</h1>
  	<app-other></app-other>
  	`,
  styles: [`
  	h1{
  	color: red;
  	`],
  	
})
export class AppComponent {
  
}
