import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  newpostForm!: FormGroup;
  file: any;

  constructor(
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
    private _blog: BlogService
  ) {}

  ngOnInit(): void {
    this.newpostForm = this.formbuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      author: ['', [Validators.required]],
      blogImage: ['']
    });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  onPublish(){
    if (this.newpostForm.valid) {
      const blogData = this.newpostForm.value;

    var FORMDATA = new FormData();
    FORMDATA.append("title", blogData.title);
    FORMDATA.append("category", blogData.category);
    FORMDATA.append("description", blogData.description);
    FORMDATA.append("author", blogData.author);
    FORMDATA.append("blogImage", this.file);


      this._blog.createBlog(FORMDATA).subscribe({
        next: (response: any) => {
          console.log(response)
          this.newpostForm.reset({
            category: '',
          });
          this.toastr.success(response.message);
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
