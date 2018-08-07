import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-world';
  
  values = ["One","Two","Three"];

  isValidUser=true;
  isBetter = true;
  
  user : User = {
  name : 'IBM',
  phone: '1234',
  address: 'Manyata' 
  }

  verify(){
  alert('Event');
 
}

export class User{
	name: String;
	phone: String;
	address: String;
}