import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn: boolean;
  constructor(private loginService: LoginService, private router:Router,
    private data: DataService) { }

  logout() {
    this.loggedIn = false;
    this.data.logIn(this.loggedIn);
    location.reload();
    // this.loginService.logout().subscribe(
    //   res => {
    //     location.reload();
    //     this.logIn = false;
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // )
    this.router.navigate(['/']);
  }

  ngOnInit() {
    // this.loginService.checkSession().subscribe(
    //   res => {
    //     this.logIn = true;
    //   },
    //   error => {
    //     this.logIn = false;
    //   }
    // )
    this.data.loginStatus.subscribe(loggedIn => this.loggedIn = loggedIn)
  }


}
