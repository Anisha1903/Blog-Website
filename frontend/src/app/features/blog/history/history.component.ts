import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';
import { UpdateDialogComponent } from 'src/app/shared/update-dialog/update-dialog.component';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  blogArray: any[] = [];
  updateForm!: FormGroup
  id: any
  public apiUrl = environment.apiUrl;
  public frontendUrl = environment.frontendUrl;

  constructor(
    private _blog: BlogService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBlogData()
  }

  getBlogData() {
    this._blog.getBlog().subscribe({
      next: (response: any) => {
        this.blogArray = response.blogposts;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  deleteBlog(item: any) {
    const id = item
    this._blog.deleteBlog(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.toastr.success(response.message);
        this.getBlogData()
      },
      error: (error: any) => {
        console.log(error);
        this.toastr.error(error.error.message);
      },
    });
  }

  Openpopup(item: any) {
    var _popup = this.dialog.open(UpdateDialogComponent, {
      width: '400px',
      height: "500px",
      data: {
        title: 'Update Blog Post',
        blogdata: item
      }
    })

    _popup.afterClosed().subscribe(items => {
      console.log(items)
      this.getBlogData()
    })
  }

  shareOnWhatsApp(item: any) {
    const id = item
    const Blog = this.blogArray.find(blog => blog._id === id);

    const blogTitle = Blog.title

    const productionUrl = this.frontendUrl
    const currentURL = this.router.url;
    // const blogURL = this.router.createUrlTree(['/blog', blog._id]).toString();
    const blogURL =  `${currentURL}`;

    const whatsappShareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(productionUrl + blogURL)}`;

    window.open(whatsappShareLink, '_blank');
  }
}
