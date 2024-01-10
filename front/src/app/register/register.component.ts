import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  form: any = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    role: null // Add role to the form model
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
    private router: Router) { }

  onSubmit(): void {
    const { firstname, lastname, email, password, role } = this.form;

    this.authService.register(firstname, lastname, email, password, role).subscribe({
      next: data => {
        // Success handling
        this.isSuccessful = true; // Set isSuccessful to true on successful registration
        this.isSignUpFailed = false;
        this.errorMessage = '';
        
        // Delay redirecting to allow the success message to be displayed
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000); 
      },
      error: err => {
        // Error handling
        this.isSuccessful = false;
        this.isSignUpFailed = true;
        this.errorMessage = err.error.message || 'Failed to register'; 
      }
    });
  }
}

