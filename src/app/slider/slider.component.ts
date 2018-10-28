import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from '../serviceapi.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private serviceapiservice: ServiceapiService) { }

  ngOnInit() {
    this.serviceapiservice.getdata().subscribe(res => {
      console.log(res.json());
    });
  }

}
