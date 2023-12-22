import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  userName1: string='';
  userName2: string='';
  userName3: string='';
  loggedIn: boolean = true;
  profile: any;
  constructor(private router: Router, private toastr: ToastrService, public _auth: AuthenticationService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    // console.log(token)
    if (token) {
      this.loggedIn = true;

      this._auth.getUserData(token).subscribe(
        (userData) => {
          // this.profile = userData.userdata[0].profile;
          this.userName1 = userData.userdata[0].fname;
          this.userName2 = userData.userdata[0].lname;
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    }else{
      this.loggedIn = false;
      this.userName3 = "Username"

    }


    this._auth.userDataUpdated.subscribe((userData) => {
      if (userData) {
        console.log(userData)
        this.loggedIn = true;
        this.userName1 = userData.loginData.fname;
        this.userName2 = userData.loginData.lname;
      } else {
        this.loggedIn = false;
      }
    });
  }

  onLogout() {
    this._auth.logout();
    this.toastr.info('Logged Out Successfully', 'Info');
    this.router.navigate(['/auth/login']);
    this.userName3 = "Username"
  }
}
