import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string = 'shubhamarora140 at gmail.com';
  phoneNumber: string = '8222813489';
  location: string = 'Chandigarh, Infosys';
  jobTitle: string = 'System Engineer at Infosys';
  jobDescription: string = 'As a System Engineer at Infosys, I worked on various projects involving system architecture, maintenance, and troubleshooting.';
  
}
