import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cmp',
  templateUrl: './menu-cmp.component.html',
  styleUrls: ['./menu-cmp.component.css']
})
export class MenuCmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactOpenFunction(event) {
    alert("Button is clicked");
    console.log(event);
  }
}

}
