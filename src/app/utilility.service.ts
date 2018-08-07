import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtililityService {

  constructor() { }

  getDate(){
  	return new Date();
  }

  getString(data){
  console.log('Data is '+data);
  	return "Hello World";
  }
}
