import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/models/credenciais';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  cookieValue: string;
  // creds: Credenciais = {
  //   email: '',
  //   password: ''
  // }

  // email = new FormControl(null, Validators.email);
  // password = new FormControl(null, Validators.minLength(3));
  constructor(
    private router:          Router,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private service : LoginService,
    ) { }

  ngOnInit(): void {
    const token = this.cookieService.get('token');
    if (token) {
      this.loginValidate(token);
    }
  }

  loginValidate(token): void {
    this.service.loginValidate(token).subscribe(_resposta => {
      this.router.navigate(['home']);
    })
  }

  // logar() {
  //   this.service.authenticate(this.creds).subscribe(_resposta => {
  //     this.router.navigate(['/home'])
  //   });
  // }

  // validaCampos(): boolean {
  //   return this.email.valid && this.password.valid
  // }


  getGoogleOauthURL() {
     const GOOGLE_CLIENT_ID="450090421403-00movt1r3pgj2uc1akcv74httiihbhic.apps.googleusercontent.com"
    //  const GOOGLE_CLIENT_SECRET="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"
     const GOOGLE_OAUTH_REDIRECT_URL="http://localhost:3001/api/oauth/google"
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    const options = {
      // eslint-disable-next-line
      redirect_uri: GOOGLE_OAUTH_REDIRECT_URL as string,
      // eslint-disable-next-line
      client_id: GOOGLE_CLIENT_ID as string,
      // eslint-disable-next-line
      access_type: 'offline',
      // eslint-disable-next-line
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ].join(' '),
    };
    const qs = new URLSearchParams(options).toString();
    window.location.href = `${rootUrl}?${qs}`;
  }
}
