import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ViewerComponent } from '../viewer/viewer.component';
import { NavPaneComponent } from '../nav-pane/nav-pane.component';
import { LicenseComponent } from '../license/license.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterOutlet, ViewerComponent,
    NavPaneComponent,
    LicenseComponent, CardModule, ButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user: any = null;

  constructor(private auth: Auth, private router: Router, private authService: AuthService) {}
  loginForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.createLoginForm();
  }



  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      this.user = result.user;
      console.log('User Info:', this.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  login() {
    if (this.loginForm?.valid) {
      this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password)
    }
  }
}
