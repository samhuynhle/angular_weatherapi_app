import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city: any = {}

  getDallas(){
    let observable = this._httpService.getWeather("Dallas");
    observable.subscribe((data)=> {
      console.log("Got Daalas!", data);
      this.city = data;
    });
  }

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getDallas();
  }

}
