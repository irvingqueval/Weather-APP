import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';



const API_KEY = environment.apiKey;
const API_URL = environment.apuUrl;

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private http = inject(HttpClient);

  constructor() {}
  
  getWeather(city: string) {
    return this.http.get(`${API_URL}?q=${city}&appid=${API_KEY}`);
  }
}
