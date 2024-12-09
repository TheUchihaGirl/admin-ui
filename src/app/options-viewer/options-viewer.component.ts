import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  RouterOutlet,
  ActivatedRoute
} from '@angular/router';
import { AdminOptionsService } from '../admin-options.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-options-viewer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './options-viewer.component.html',
  styleUrl: './options-viewer.component.css'
})
export class OptionsViewerComponent implements OnInit {
  isActionCreate = true;

@ViewChild('name') 
nameInput: ElementRef = new ElementRef(null);

@ViewChild('colour')
colourInput: ElementRef = new ElementRef(null);

  constructor(private route: ActivatedRoute, private adminOptionsService: AdminOptionsService, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isActionCreate = params['action'].toLowerCase() === 'create';
    });
  }

  save() {
    let optionName: string = this.nameInput.nativeElement.value;
    let optionColour: string = this.colourInput.nativeElement.value;
    console.log(optionName);
    console.log(optionColour);

    this.adminOptionsService.addOption(optionName, optionColour).subscribe(data => {
      console.log(data);
      this.toastr.success('Option added successfully');
    });
  }

  getAllOptions(){
    console.log('Get all options');
    this.adminOptionsService.getOptions().subscribe(data => {
      console.log(data);
    });
  }
}
