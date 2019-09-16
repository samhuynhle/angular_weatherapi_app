import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  city: any = {}

  getSanJose(){
    let observable = this._httpService.getWeather("San Jose");
    observable.subscribe((data) => {
      console.log("Got San JOse", data);
      this.city = data;
    })
  }
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSanJose();
  }

}
