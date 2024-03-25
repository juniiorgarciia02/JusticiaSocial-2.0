import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// Import logger script 
import * as logger from "../scripts/logger.js";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Justicia Social';

    //Sidebar toggle show hide function
    status = false;
    addToggle()
    {
      this.status = !this.status;       
    }
   
}
