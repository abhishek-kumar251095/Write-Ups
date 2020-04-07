import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginModel } from 'src/app/Models-Shared/login.model';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  registerForm: FormGroup;
  errMsg: string;

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    });
  }

  onRegister() {

    if (this.registerForm.status === 'VALID') {

      const userData = new LoginModel(this.registerForm.value.username, 
                                      this.registerForm.value.password,
                                      this.registerForm.value.email);

      this.authService.register(userData)
          .pipe(
            catchError(err => {
              this.errMsg = err;
              return err;
            })
          )
          .subscribe(val => {
            this.router.navigate(['']);
          })
    } else {

      this.errMsg = '*All fields are mandatory!';
      Array.from(document.getElementsByTagName('input')).forEach(element => {
        if (element.value === '') {
          element.classList.add('invalid-input');
        }
      });

    }
  }



}
