import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../../../interfaces/responses/login-response';
import { AuthenticationService } from '../../../services/authentication.service';
import { BootstrapService } from '../../../services/bootstrap.service';

@Component({
  selector: 'chat-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private http: HttpClient,
    private bootstrapService: BootstrapService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.http.post<LoginResponse>('/api/auth/login', this.loginForm.value)
      .subscribe(res => {
        if(res.token) {
          this.authenticationService.setToken(res.token);

          this.bootstrapService.load()
            .subscribe(res => {
              
            });
        }
      });

    this.router.navigate(['/channels', 'main']);
  }

}
