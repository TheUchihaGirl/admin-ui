import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-pane',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-pane.component.html',
  styleUrl: './nav-pane.component.css'
})
export class NavPaneComponent implements OnInit{


  constructor(
    private router: Router,
    private route: ActivatedRoute
) { }


  ngOnInit(): void {
    this.create();
    this.isCollapsed = false;
  }
  
  isCollapsed: boolean = true; // Track whether the accordion is collapsed

  toggle() {
    this.isCollapsed = !this.isCollapsed; // Toggle the collapsed state
    console.log('Toggle clicked!' + this.isCollapsed);
  }

  create() {
    this.router.navigate(['create'],  { relativeTo: this.route });
    // Implement create logic here
  }

  modify() {
    this.router.navigate(['modify'],  { relativeTo: this.route })
    // Implement modify logic here
  }
}
