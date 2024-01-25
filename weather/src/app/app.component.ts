import { Component, ElementRef, ViewChild } from '@angular/core';
import { WeatherDetails } from './model/model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  constructor() { }
  @ViewChild('input') input!: ElementRef;
  city!: string;
  currentDate!: string;
  latitude!: number;
  longitude!: number;
  weatherDetail!: WeatherDetails[]
  isError:boolean = false;
  showError:boolean= false;
  emptyCheck(event:any){
    if(event.target.value.length>0){
      this.isError = false
    }
  }
  getTemperature() {
    var input = this.input.nativeElement.value;
    if (input) {
      var apiKey = '6712ad32c071b16ba2a01a96b81ede5b';
      var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
      var city = input;
      var api = `${apiUrl}?q=${city}&appid=${apiKey}`
      fetch(api)
        .then(response => response.json())
        .then(data => {
          this.weather(data);
          this.showError = false;
          input = "";
        })
        .catch(error => {
          this.showError = true;
        });
    }
    else{
      this.isError = true;
    }
  }
  weather(data: any) {
    this.city = data.city.name;
    this.currentDate = new Date().toLocaleDateString();
    this.latitude = data.city.coord.lat;
    this.longitude = data.city.coord.lon;
    var cDate = new Date();
    this.weatherDetail =[]
    for (let i = 0; i <= 5; i++) {
      let nextDate = new Date(cDate).getDate() + i;
      this.weatherDetail.push({ date: nextDate.toString(), list: [] })
    }
    for (let i = 0; i < this.weatherDetail.length; i++) {
      let weather = data.list.filter((val: any) => new Date(val.dt * 1000).getDate().toString() === this.weatherDetail[i].date);
      if (weather) {
        this.weatherDetail[i].list.push(weather);
        this.input.nativeElement.value ="";
      }
    }
  }
}
