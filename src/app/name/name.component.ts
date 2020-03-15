import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  animations:[
    trigger('emptyState', [
      transition('void => *', [
        style({
          'opacity': 0,
          'transform': 'translatey(-400px)'
        }),
        animate(500)
      ])
    ]),
  ]
})
export class NameComponent implements OnInit{

  isLoggedIn: boolean = false;

  constructor(private usersService: UsersService){}

  ngOnInit(){
  }

  @ViewChild('f', {static:true}) signupForm: NgForm;

  onSubmit(form: NgForm){
    this.isLoggedIn = true;
    this.usersService.setUsername(form.value.username); 
    this.usersService.loginEmitter.next(this.isLoggedIn);
  }



}

