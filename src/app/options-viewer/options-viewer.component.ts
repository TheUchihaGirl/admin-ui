import {
  Component,
  ElementRef,
  Input,
  OnInit,
  viewChild,
  ViewChild
} from '@angular/core';
import {
  RouterOutlet,
  ActivatedRoute
} from '@angular/router';
import { AdminOptionsService } from '../admin-options.service';
import { ToastrService } from 'ngx-toastr';
import { OptionModel } from '../model/OptionModel';

@Component({
  selector: 'app-options-viewer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './options-viewer.component.html',
  styleUrl: './options-viewer.component.css'
})
export class OptionsViewerComponent implements OnInit {
isActionCreate = true;
optionsList : OptionModel[] = [];

selectedOptionId: number = 0;
selectedOptionName: string = '';
selectedOptionColour: string = '';

@ViewChild('name') 
nameInput: ElementRef = new ElementRef(null);

@ViewChild('colour')
colourInput: ElementRef = new ElementRef(null);

@ViewChild('selectedOptionNameElem')
selectedOptionNameElem: ElementRef = new ElementRef(null);

@ViewChild('selectedOptionColourElem')
selectedOptionColourElem: ElementRef = new ElementRef(null);



  constructor(private route: ActivatedRoute, 
              private adminOptionsService: AdminOptionsService, 
              private toastr: ToastrService) {

  }
  ngOnInit(): void {
    console.log("INI___________________");
    this.route.queryParams.subscribe(params => {
      this.isActionCreate = params['action'].toLowerCase() === 'create';
      if(!this.isActionCreate){
        this.adminOptionsService.getOptions().subscribe(data => {
          this.optionsList = data;
        });
      }
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

  update() {
    let optionName: string = this.selectedOptionNameElem.nativeElement.value;
    let optionColour: string = this.selectedOptionColourElem.nativeElement.value;
    this.adminOptionsService.updateOption({id: this.selectedOptionId, name: optionName, colour: optionColour}).subscribe(data => {
      console.log(data);
      this.toastr.success('Option updated successfully')
      this.optionsList = this.optionsList.map(option => {
        if(option.id === this.selectedOptionId){
          return {id: this.selectedOptionId, name: optionName, colour: optionColour};
        }
        return option;
      });
    });
  }

  onOptionChange(e: any){
    this.selectedOptionId = Number(e.target.value);

    let selectedOption : OptionModel | undefined = this.optionsList.find(option => option.id === this.selectedOptionId);
    if (selectedOption) {
      this.selectedOptionName = selectedOption.name;
      this.selectedOptionColour = selectedOption.colour;
    } else {
      // Handle the case when the option is not found
      console.error('Selected option not found');
    }
  }

  getAllOptions(){
    this.adminOptionsService.getOptions().subscribe(data => {
      console.log(data);
    });
  }
}
