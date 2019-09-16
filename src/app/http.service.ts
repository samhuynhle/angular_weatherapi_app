import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getWeather(city_name){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&&units=imperial&&APPID=a70bf709fd1e065e44e8d15d26814033`);
  }
  constructor(private _http: HttpClient) {}
}
