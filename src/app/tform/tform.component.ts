import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
save(data){
		alert('User name '+data.username+"-- Password-- "+data.pass);
	}
}
