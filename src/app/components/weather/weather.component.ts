import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';
import { Weather } from '../../models/weather.model';
import { KelvinToCelciusPipe } from '../../pipes/kelvin-to-celcius.pipe';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [KelvinToCelciusPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnChanges {
  @Input() city!: string;
  erroMessage: string | null = null;
  weather: Weather;

  constructor(private weatherApiService: WeatherApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['city']) {
      this.serchWeather();
    }
  }

  serchWeather() {
    this.weatherApiService.getWeather(this.city ? this.city : 'Paris').subscribe(
      (datas: any) => {
        this.weather = datas;
      },
    );
  }
}
