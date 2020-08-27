import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from 'src/app/employe.service';
import {Employe} from 'src/app/employe';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeComponent implements OnInit {
  employee: Employe = new Employe();
  submitted = false;
  constructor(private employeService:EmployeService, private router:Router) { }

  ngOnInit(): void {
    this.submitted = false;
  }
 /* newEmployee(): void {
    
    this.employee = new Employe();
  }*/

  save() {
    this.employeService
    .createEmploye(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employe();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
