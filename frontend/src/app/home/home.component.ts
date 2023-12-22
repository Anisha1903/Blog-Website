import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
  blogArray: any[] = [];
  public apiUrl = environment.apiUrl;

  constructor(
    private _blog: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlogData()

    this.bannerSlides()
  }

  // get apiUrl(): string {
  //   return environment.apiUrl;
  // }


  bannerSlides() {
    this.slides[0] = {
      id: 0,
      src: '../../assets/Images/banners/3.png',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: '../../assets/Images/banners/1.png',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: '../../assets/Images/banners/4.png',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
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
}
