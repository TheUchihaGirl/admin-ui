import {
  Component,
  OnInit
} from '@angular/core';
import {
  RouterOutlet,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-options-viewer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './options-viewer.component.html',
  styleUrl: './options-viewer.component.css'
})
export class OptionsViewerComponent implements OnInit {
  isActionCreate = true;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isActionCreate = params['action'].toLowerCase() === 'create';
    });
  }
}
