import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css'
})
export class ViewerComponent {

}
