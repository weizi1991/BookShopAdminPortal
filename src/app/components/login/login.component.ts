import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username':'', 'password': ''};
  loggedIn: boolean;
  constructor(private loginService: LoginService, private data: DataService) { }

  onSubmit(){
    // this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
    //  res=>{
    //    console.log(res);
    //    localStorage.setItem("xAuthToken", res.json().token);
    //    this.loggedIn = true;
    //    location.reload();
    //  },
    //  error=>{
    //    console.log(error)
    //  });
    this.loggedIn = true;
    this.data.logIn(this.loggedIn);

  };
  ngOnInit() {
    // this.loginService.checkSession().subscribe(
    //   res => {
    //     this.loggedIn = true;
    //   },
    //   error => {
    //     this.loggedIn = false
    //   }
    // )

    this.data.loginStatus.subscribe(loggedIn => this.loggedIn = loggedIn);
  }

}
