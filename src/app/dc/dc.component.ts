import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  city: any = {}

  getDC(){
    let observable = this._httpService.getWeather("Washington");
    observable.subscribe((data)=> {
      console.log("Got DC", data);
      this.city = data;
    })
  }

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getDC();
  }

}
