import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
navbar={
  logo:"",
  alt:"",
  item1:'Home',
  item2:'about',
  item3:'contactus',
  item4:'signin',
  item5:'signup'
}
}
