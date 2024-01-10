import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, 
    private storageService: StorageService,
    private userService: UserService,
    private router: Router) { }

    ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
        // Redirect based on the user role or to a default page
        const user = this.storageService.getUser();
        if (user && user.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      }
    }
    

  onSubmit(): void {
    const { email, password } = this.form;
  
    this.authService.login(email, password).subscribe({
      next: data => {
        if (data && data.token) {
          this.storageService.saveToken(data.token);
          this.isLoggedIn = true;
          this.errorMessage = '';
          
          const userId = this.storageService.getUserIdFromToken();
          if (userId) {
            this.userService.getUserDetails(userId).subscribe(userDetails => {
              this.storageService.saveUser(userDetails);
              // Check role and redirect
              if (userDetails.role === 'ADMIN') {
                this.router.navigate(['/admin']).then(() => {
                  window.location.reload();
                });
              } else if (userDetails.role === 'DONATEUR') {
                this.router.navigate(['/aid']).then(() => {
                  window.location.reload();});
              }else if (userDetails.role === 'VOLONTAIRE') {
                this.router.navigate(['/volontaring']).then(() => {
                  window.location.reload();});
              }
              else if (userDetails.role === 'VICTIME') {
                this.router.navigate(['/assistance']).then(() => {
                  window.location.reload();});
              }
              
            });
          } else {
            // Handle error: User ID not found in token
          }
        } else {
          this.errorMessage = 'No token found in the response.';
          this.isLoginFailed = true;
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
    
  }
  
  reloadPage(): void {
    window.location.reload();
  }
}
