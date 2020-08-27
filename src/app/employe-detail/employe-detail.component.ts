import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.css']
})
export class EmployeDetailComponent implements OnInit {
  id: number;
  employee: Employe;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeService) { }

  ngOnInit(){
    this.employee = new Employe();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['employees']);
  }

}
