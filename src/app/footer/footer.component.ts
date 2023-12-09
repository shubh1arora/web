import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  email: string = 'shubhamarora140 at gmail.com';
  phoneNumber: string = '8222813489';
  location: string = 'Chandigarh, Infosys';
  jobTitle: string = 'System Engineer at Infosys';
  jobDescription: string = ' I worked on various projects involving system architecture, maintenance, and troubleshooting.';
}
