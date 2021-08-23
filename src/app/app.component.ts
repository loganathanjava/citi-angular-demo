import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  firstName:String = 'text';

  

  constructor(public appService:AppService) {

  }
  handleClick() {
    this.appService.save();
    console.log(this.firstName);
  }
  handleDelete() {
    console.log("Deleted");
  }
}
