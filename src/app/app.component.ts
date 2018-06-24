import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  amount;
  singleItem = false;

  constructor(private http: HttpClient) {

    this.getItemCount().subscribe(data => {
      // console.log(data);
      this.amount = data.getItemCount.itemCount;
    });
  }

  amountArray(n: number): any[] {
    return Array(n);
  }

  public getItemCount(): Observable<any> {
    const url = './assets/db.json';
    return this.http.get(url);
  }

  switch() {
    this.singleItem = !this.singleItem;
  }
}
