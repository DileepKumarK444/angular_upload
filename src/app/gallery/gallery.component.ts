import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() someInput: string | undefined;
  images: any = null;
  constructor(private api:ApiService) { }
   
  ngOnInit(): void {
    this.load_images()
    
  }
  load_images(){
    const res = this.api.get_all().subscribe((data)=>{
      this.images = data
    });
  }

  ngOnChanges() {
    this.load_images()
  }   

}
