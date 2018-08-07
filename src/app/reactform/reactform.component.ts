import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  angForm: FormGroup;
  user;
  pass;
  constructor(private builder: FormBuilder) {
    this.createForm();
  }
   
   createForm() {
   		this.angForm = this.builder.group({
       		user: ['', Validators.required ],
       		pass: ['',Validators.required]
  		});
	}
  save(){
    this.pass=this.angForm.controls['pass'].value;
    this.user=this.angForm.controls['user'].value;
  }
}
