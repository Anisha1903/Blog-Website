import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private _auth: AuthenticationService,
    private _router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this._auth.loginUser({ email, password }).subscribe({
        next: (res: any) => {
          this._auth.setUserData(res);

          const token = res.token;
          sessionStorage.setItem('token', token);
          localStorage.setItem('token', res.token);

          this.loginForm.reset();
          this._router.navigate(['/']);
          this.toastr.success(res.message, 'Success');

        },
        error: (error) => {
          console.log(error);
          this.toastr.error(error.error.message);
        },
      });
    } else {
      this.toastr.warning('All Fields are required.');
    }
  }

}
