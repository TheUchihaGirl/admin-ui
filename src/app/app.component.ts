import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OptionsComponent } from "./options/options.component";
import { OptionsViewerComponent } from "./options-viewer/options-viewer.component";
import { LicenseComponent } from "./license/license.component";
import { ViewerComponent } from './viewer/viewer.component';

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
  title = 'booking-admin-ui';
}
