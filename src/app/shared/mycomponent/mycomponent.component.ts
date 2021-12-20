import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {

  vacStatus:any = [];
  vacTypes:any =[];
  showvacType: any;
  fullyVaccinated:any;
  partiallyVaccinated:any;
  selectedVacStatus :any;
  now: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  
  this.vacStatus =[{id:1,value:'Vaccinated'},{id:2,value:'Partially Vaccinated'},{id:3,value:'Covid-19 test results'}];
  this.vacTypes = [{id:1,value:'Pfizer-BioNTech'},{id:2,value:'Moderna'},{id:3,value:'Johnson & Johnson’s Janssen'}]
  }
  vacStatusCanged(data:any)
{
   if (data.value== 1  || data.value ==2 || data.value == 3)
    {
     
      this.showvacType = true;
      this.partiallyVaccinated = true;
     if (data.value ==1)
     this.fullyVaccinated = true;
     else
     this.fullyVaccinated = false; 
      
    }
    else
    {
    this.showvacType = false;
    this.fullyVaccinated = false;  
    this.partiallyVaccinated= false;
  
  }
}

}
