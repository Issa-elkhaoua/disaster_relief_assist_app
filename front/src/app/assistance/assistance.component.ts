import { Component, OnInit } from '@angular/core';
import { AssistanceService } from '../_services/assistance.service';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.css']
})
export class AssistanceComponent implements OnInit {
  assistances: any[] = [];
  assistance: any = {
    
  };
  userDetail: any;


  constructor(private assistanceService: AssistanceService,private userService: UserService,private storageService: StorageService) { }

  ngOnInit(): void {
    const userId = this.storageService.getUserIdFromToken();
    if (userId) {
      this.userService.getUserDetails(userId).subscribe({
        next: userDetails => {
          this.userDetail = userDetails;
          this.assistance.userId = this.userDetail.id; 
        },
        error: err => {
          console.error('Error fetching user details:', err);
          // Handle error
        }
      });
    }
    this.loadAllAssistances();
  }


  loadAllAssistances() {
    this.assistanceService.getAllAssistances().subscribe(data => {
      this.assistances = data;
    });
  }

  editAssistance(assistance: any) {
    this.assistance = {...assistance};
  }

  deleteAssistance(id: number) {
    this.assistanceService.deleteAssistance(id).subscribe(() => {
      this.loadAllAssistances();
    });
  }

  onSubmit() {
    if (this.assistance.assistanceId) {
      this.assistanceService.updateAssistance(this.assistance.assistanceId, this.assistance).subscribe(() => {
        this.loadAllAssistances();
      });
    } else {
      this.assistanceService.createAssistance(this.assistance).subscribe(() => {
        this.loadAllAssistances();
      });
    }
    this.assistance = {};
  }
}
