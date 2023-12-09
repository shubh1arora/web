import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm!: FormGroup;
  serviceTypes: string[] = ['Web Development', 'Design', 'Consulting', 'Other'];
  submitted: boolean= false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      serviceType: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Perform actions like submitting data to backend or handling form data here
      console.log(this.contactForm.value);
      // Reset the form after submission
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to display validation errors
      this.markFormGroupTouched(this.contactForm);
    }
  }

  // Helper function to mark all form fields as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  setsubmitted() {
    this.submitted=true;
    }
}