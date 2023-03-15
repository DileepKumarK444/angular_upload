import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { GalleryComponent } from '../gallery/gallery.component';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers : [GalleryComponent]
})
export class UploadComponent implements OnInit {
  
  file:any = ''
  name:any = ''
  data:any = ''
  constructor(private http:HttpClient,private router:Router,private api:ApiService,private gallery:GalleryComponent) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    let query = {
      'file':this.file
    }
    const res = this.api.upload(query).subscribe((data)=>{
      console.log(data)
      this.data = data
      // this.router.navigate(['/']);
      // this.gallery.ngOnInit();
      // this.images = data
    });
  }
  onChange(e:any){
    this.file = e.target.files[0]
  }

}
