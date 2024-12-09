import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
constructor(
    private router: Router
) { }

  isCollapsed: boolean = true; // Track whether the accordion is collapsed

  toggle() {
    this.isCollapsed = !this.isCollapsed; // Toggle the collapsed state
    console.log('Toggle clicked!' + this.isCollapsed);
  }

  create() {
    this.router.navigate(['option'], { queryParams: { action: 'create' } });
    // Implement create logic here
  }

  modify() {
    this.router.navigate(['option'], { queryParams: { action: 'modify' } });
    // Implement modify logic here
  }
}
