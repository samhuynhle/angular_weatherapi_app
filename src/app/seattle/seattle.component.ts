import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})

export class SeattleComponent implements OnInit {
  city: any = {}

  getSeattle(){
    let observable = this._httpService.getWeather("Seattle");
    observable.subscribe((data) => {
      console.log("Got Seattle!", data);
      this.city = data;
    });
  }

  constructor (private _httpService: HttpService) {}

  ngOnInit() {
    this.getSeattle();
  }

}
