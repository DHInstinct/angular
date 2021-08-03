import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  name = "Daniel"
  num = 112
  num2 = 10


  public getAge(a: number, b: number): number {
    return a + b;
  }

  public getName(name: string) {
    return name;
  }

}
