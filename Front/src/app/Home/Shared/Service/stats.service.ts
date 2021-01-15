import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

constructor(private http : HttpClient) { }

 URI : string = "https://localhost:44307/api/Stats";

getProductNumber() : Observable<number> {
  return this.http.get<number>(this.URI);
}

getProductNumberS() : Observable<number> {
  return this.http.get<number>(this.URI + '/CountPrice');
}

totalPriceQte() : Observable<number> {
  return this.http.get<number>(this.URI + '/TotalPrice');
}

}
