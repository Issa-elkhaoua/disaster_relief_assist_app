import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service'; // Import StorageService

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  userDetail: any;

  constructor(private userService: UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    const userId = this.storageService.getUserIdFromToken();
    if (userId) {
      this.userService.getUserDetails(userId).subscribe({
        next: userDetails => {
          this.userDetail = userDetails;
        },
        error: err => {
          console.error('Error fetching user details:', err);
          // handle error
        }
      });
    }
  }
}
