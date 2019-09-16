import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapi';
  constructor (private _httpService: HttpService) {}

  getDallas(){
    let observable = this._httpService.getWeather("Dallas");
    observable.subscribe(data => console.log("Got Dalls", data));
  }

  getBurbank(){
    let observable = this._httpService.getWeather("Burbank");
    observable.subscribe(data => console.log("Got Burbank", data));
  }

  getChicago(){
    let observable = this._httpService.getWeather("Chicago");
    observable.subscribe(data => console.log("Got Chicago", data));
  }

}