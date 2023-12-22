import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private _router: Router,
    private toastr: ToastrService,
    private _auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formbuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const personData = this.myForm.value;

      this._auth.registerUser(personData).subscribe({
        next: (response: any) => {
          this.myForm.reset();
          this.toastr.success(response.message);
          this._router.navigate(['auth/login']);
        },
        error: (error: any) => {
          console.log(error);
          this.toastr.error(error.error.message);
        },
      });
    } else {
      this.toastr.warning('All Fields are Required');
    }
  }
}
