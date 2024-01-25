import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {
  @Input() details: any
  constructor() {

  }
  ngOnInit(): void {
  
  }

}
