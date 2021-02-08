import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../shared/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router,
              private route: ActivatedRoute,private toastrService: ToastrService) {
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
      name: [''],
      username: [''],
      password: [''],
      re_password: [''],
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
    this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(res => {
          console.log('login response', res);
          if (res.status === true) {
            this.toastrService.info('Login successfully','Message',{timeOut: 3000,});
            this.router.navigate(['/dashboard/default']);
          }
          if (res.status === false) {
            this.toastrService.error( 'Login failed', 'Error',{timeOut: 3000,});
          }
        }, err => {
          this.toastrService.error('Login failed','Error',  {timeOut: 3000,});
          console.log('login err: ', err);
          // console.error(`Error: ${err.status} ${err.statusText}`);
        }
      );
  }

  onRegistration() {

    this.authService.registration(this.registerForm.value.name,
      this.registerForm.value.username, this.registerForm.value.password)
      .subscribe(res => {
          //console.log('registration response', res);
          if (res.status === true) {
            this.toastrService.info( 'Registration successfully', 'Message',{timeOut: 3000,});
            //this.router.navigate(['/auth/login']);
          }
          if (res.status === false) {
            this.toastrService.error('Registration failed', 'Error', {timeOut: 3000,});
          }
        }, err => {
          this.toastrService.error( 'Registration failed', 'Error',{timeOut: 3000,});
          console.log('Registration err: ', err);
          // console.error(`Error: ${err.status} ${err.statusText}`);
        }
      );
  }
}
