import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  settingForm!: FormGroup
  id: any;
  file: any;

  constructor(
    private _auth: AuthenticationService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getsettingData()
  }


  //----------------------initializeForm DATA----------------------//
  initializeForm(): void {
    this.settingForm = this.formBuilder.group({
      fname: ["", [Validators.required]],
      lname: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      channel: ["", [Validators.required]],
      // profile: [""],
    });
  }

  //---------------------GET SETTING DATA----------------------//
  getsettingData() {
    const token = localStorage.getItem('token');
    if (token) {


      this._auth.getUserData(token).subscribe({
        next: (response: any) => {
          this.id = response.userdata[0]._id


          this.settingForm.patchValue({
            fname: response.userdata[0].fname,
            lname: response.userdata[0].lname,
            email: response.userdata[0].email,
            password: response.userdata[0].password,
            channel: response.userdata[0].channel,
            // profile: response.userdata[0].profile,
          });
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  //---------------------UPDATE SETTING DATA----------------------//
  onSubmit() {
    console.log(this.settingForm.value)

    // var FORMDATA = new FormData();
    // FORMDATA.append("fname", this.settingForm.value.fname);
    // FORMDATA.append("lname", this.settingForm.value.lname);
    // FORMDATA.append("email", this.settingForm.value.email);
    // FORMDATA.append("password", this.settingForm.value.password);
    // FORMDATA.append("channel", this.settingForm.value.channel);
    // FORMDATA.append("profile", this.file);

    const formData = {
      settingdata: this.settingForm.value,
      id: this.id
    };

    if (this.settingForm.valid) {

      this._auth.updateSetting(formData).subscribe({
        next: (response: any) => {
          console.log(response);

          // this.settingdata = response
          this.toastr.success(response.message);
          this.getsettingData()
        },
        error: (error: any) => {
          console.log(error);
          this.toastr.error(error.error.message);
        },
      });
    } else {
      this.toastr.warning("All Fields Required");
      console.log("All Fields Required");
    }
  }
}
