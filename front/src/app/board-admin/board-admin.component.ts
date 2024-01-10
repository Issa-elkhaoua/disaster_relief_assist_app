import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service'; // Import StorageService

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  adminDetail: any;

  constructor(private userService: UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    const userId = this.storageService.getUserIdFromToken();
    if (userId) {
      this.userService.getUserDetails(userId).subscribe({
        next: userDetails => {
          this.adminDetail = userDetails;
        },
        error: err => {
          console.error('Error fetching admin details:', err);
          // Handle error
        }
      });
    }
  }
}
