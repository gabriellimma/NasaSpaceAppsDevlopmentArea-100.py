import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  

  var request = new XMLHttpRequest();

  request.open('POST', 'https://app.powerbi.com/home');

  request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'question': 'Favourite programming language?',
  'choices': [
    'Swift',
    'Python',
    'Objective-C',
    'Ruby'
  ]
};

request.send(JSON.stringify(body));

  }

}
