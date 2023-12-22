import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {
  inputdata: any
  closingdata = ''
  updateForm!: FormGroup
  id: any;
  file: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<UpdateDialogComponent>,
    private _blog: BlogService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.inputdata = this.data
    console.log(this.inputdata)
    this.id = this.inputdata.blogdata._id

    this.initializeForm()
    this.updateForm.patchValue({
      title: this.inputdata.blogdata.title,
      category: this.inputdata.blogdata.category,
      description: this.inputdata.blogdata.description,
      author: this.inputdata.blogdata.author,
      blogImage: this.inputdata.blogdata.blogImage
    });
  }

  initializeForm(): void {
    this.updateForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      category: ["", [Validators.required]],
      description: ["", [Validators.required]],
      author: ["", [Validators.required]],
      blogImage: [""]
    });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    // console.log(this.file);
  }
  
  onSubmit() {
    console.log(this.updateForm.value)
      id: this.id


    var FORMDATA = new FormData();
    FORMDATA.append("title", this.updateForm.value.title);
    FORMDATA.append("category", this.updateForm.value.category);
    FORMDATA.append("description", this.updateForm.value.description);
    FORMDATA.append("author", this.updateForm.value.author);
    FORMDATA.append("blogImage", this.file);


    if (this.updateForm.valid) {

      this._blog.updateBlog(FORMDATA, this.id).subscribe({
        next: (response: any) => {
          this.closingdata = response.blogData
          this.ref.close(this.closingdata)
          this.toastr.success(response.message);
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
