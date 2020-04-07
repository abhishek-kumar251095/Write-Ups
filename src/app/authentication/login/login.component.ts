import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginModel } from '../../Models-Shared/login.model';
import { UserModel } from '../../Models-Shared/user.model'; 
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  loginForm: FormGroup;
  errMsg: string;

  isLoggedIn: boolean;

  ngOnInit(): void {

    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['timeline']);
    }

    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onFormSubmit(){

    if (this.loginForm.status === 'VALID') {

      const loginData = new LoginModel(this.loginForm.value.username,
        this.loginForm.value.password);

        this.authenticationService.login(loginData)
        .pipe(
          catchError(err => {
            this.errMsg = `*${err.error.message}`;
            return err;
          })
        ). subscribe((val: UserModel) => {
        this.authenticationService.saveTokenToLocalStorage(val.token);
        this.authenticationService.saveUsernameToLocalStorage(val.username);
        this.authenticationService.authEmitter.next(true);
        });

    } else {
        this.errMsg = '*Both fields are mandatory';
        Array.from(document.getElementsByTagName('input')).forEach(element => {
          if (element.value === '') {
            element.classList.add('invalid-input');
          }
        });
    }
  }
}
