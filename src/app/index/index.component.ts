import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtililityService } from './../utilility.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  subscribe;
 
  constructor(private utils: UtililityService, private route : ActivatedRoute) { }

  ngOnInit() {
  	console.log ('Param Received '+this.route.snapshot.params.id);	
	console.log('Date is '+this.utils.getDate());
  	console.log('Name is '+this.utils.getString('Angular'));
  }
}
