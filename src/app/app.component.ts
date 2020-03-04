import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'blog';
  logo=`https://images.unsplash.com/photo-1583138081665-e4ccfb127c27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`;
  students: [
    {
      firstName: 'wesam',
      lastName: 'hamed',
      age: 25,
    },
    {
      firstName: 'wesam',
      lastName: 'hamed',
      age: 25,
    },
    {
      firstName: 'wesam',
      lastName: 'hamed',
      age: 25,
    }
  ];

}
