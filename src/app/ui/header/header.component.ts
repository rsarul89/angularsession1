import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Auth } from "../../auth";
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout();
  }
}
