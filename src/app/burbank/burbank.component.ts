import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city: any = {}

  getBurbank(){
    let observable = this._httpService.getWeather("Burbank");
    observable.subscribe((data)=> {
      console.log("Got Burbank", data);
      this.city = data;
    });
  }

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBurbank();
  }

}
