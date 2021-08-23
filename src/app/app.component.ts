import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  firstName:String = 'text';

  handleClick() {
    console.log(this.firstName);
  }
  handleDelete() {
    console.log("Deleted");
  }
}
