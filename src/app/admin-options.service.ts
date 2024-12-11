import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OptionModel } from './model/OptionModel';

@Injectable({
  providedIn: 'root'
})
export class AdminOptionsService {

  apiURL = 'http://localhost:5016/Admin/Types';

  constructor(private http : HttpClient) { }

  getOptions():Observable<OptionModel[]> {
    return this.http.get<OptionModel[]>(this.apiURL);
  }

  addOption(name : string, colour : string): Observable<number> {
    return this.http.post<number>(this.apiURL, {name, colour});
  }

  updateOption(option: OptionModel): Observable<number> { 
    let url = this.apiURL + "/" + option.id;
    return this.http.put<number>(url, {name: option.name, colour: option.colour});
  }
}
