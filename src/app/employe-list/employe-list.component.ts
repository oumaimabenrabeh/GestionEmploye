import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from 'src/app/employe.service';
import {Employe} from 'src/app/employe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {
  employees: Observable<Employe[]>;
  constructor(private employeService:EmployeService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.employeService.getEmployeesList();
  }
  deleteEmployee(id: number) {
    this.employeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }


}
