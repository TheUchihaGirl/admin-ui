import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OptionsComponent } from "./options/options.component";
import { OptionsViewerComponent } from "./options-viewer/options-viewer.component";
import { LicenseComponent } from "./license/license.component";
import { ViewerComponent } from './viewer/viewer.component';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewerComponent,
            OptionsComponent, OptionsViewerComponent,
            LicenseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: any = null;
  title = 'booking-admin-ui';

  constructor(private auth: Auth) {}

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



}
