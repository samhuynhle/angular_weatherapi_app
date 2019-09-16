import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: any = {}

  getChicago(){
    let observable = this._httpService.getWeather("Chicago");
    observable.subscribe((data)=> {
      console.log("Got Chicago!", data);
      this.city = data;
    });
  }

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getChicago();
  }

}
