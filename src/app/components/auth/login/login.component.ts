import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../shared/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router,
              private route: ActivatedRoute) {
    this.createLoginForm();
    this.createRegisterForm();
  }

  owlcarousel = [
    {
      title: "Welcome",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Welcome",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Welcome",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    }
  ]
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };

  env = environment;
  hasAuthToken: any = '';

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    })
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: [''],
      confirmPassword: [''],
    })
  }

  ngOnInit() {
    this.hasAuthToken = this.authService.getToken();
    if (this.hasAuthToken !== '') {
      this.authService.logout();
    }
  }

  onLoginSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
    return;
    this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(res => {
          console.log('login response', res);
          if (res.status === true) {
            this.router.navigate(['/dashboard/default']);
          }
          if (res.status === false) {

          }
        }, err => {
          console.log('login err: ', err);
          // console.error(`Error: ${err.status} ${err.statusText}`);
        }
      );
  }

  onRegistration() {

  }

}
