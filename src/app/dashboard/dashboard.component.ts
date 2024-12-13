import { Component } from '@angular/core';
import { ViewerComponent } from '../viewer/viewer.component';
import { NavPaneComponent } from '../nav-pane/nav-pane.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavPaneComponent, ViewerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
