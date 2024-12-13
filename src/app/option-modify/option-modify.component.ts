import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OptionModel } from '../model/OptionModel';
import { ActivatedRoute } from '@angular/router';
import { AdminOptionsService } from '../admin-options.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-option-modify',
  standalone: true,
  imports: [],
  templateUrl: './option-modify.component.html',
  styleUrl: './option-modify.component.css'
})
export class OptionModifyComponent implements OnInit {
  optionsList : OptionModel[] = [];

  selectedOptionId: number = 0;
  selectedOptionName: string = '';
  selectedOptionColour: string = '';
  
  
  
  @ViewChild('selectedOptionNameElem')
  selectedOptionNameElem: ElementRef = new ElementRef(null);
  
  @ViewChild('selectedOptionColourElem')
  selectedOptionColourElem: ElementRef = new ElementRef(null);

  constructor(private route: ActivatedRoute, 
    private adminOptionsService: AdminOptionsService, 
    private toastr: ToastrService) {

}
  ngOnInit(): void {
    this.adminOptionsService.getOptions().subscribe(data => {
      this.optionsList = data;
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
}
