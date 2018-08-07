import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  data;
  constructor(private http: Http) { }

  ngOnInit() {
  	this.http.get("https://reqres.in/api/users").
      map((response) => response.json())
      .subscribe((data)=> {this.data = data);
      });
  }

}
