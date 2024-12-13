import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminOptionsService } from '../admin-options.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-option-create',
  standalone: true,
  imports: [],
  templateUrl: './option-create.component.html',
  styleUrl: './option-create.component.css'
})
export class OptionCreateComponent {


  @ViewChild('name') 
  nameInput: ElementRef = new ElementRef(null);
  
  @ViewChild('colour')
  colourInput: ElementRef = new ElementRef(null);

  constructor(private route: ActivatedRoute, 
    private adminOptionsService: AdminOptionsService, 
    private toastr: ToastrService) {

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
}
