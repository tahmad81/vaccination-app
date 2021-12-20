import { Component, OnDestroy, OnInit } from '@angular/core';
import { MycomponentComponent }
 from 'src/app/shared/mycomponent/mycomponent.component';
 import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent  implements OnInit, OnDestroy{
  orderForm: FormGroup;
  items: FormArray;
  vacStatus:any = [];
  vacTypes:any =[];
  showvacType: any;
  fullyVaccinated:any;
  partiallyVaccinated:any;
  selectedVacStatus :any;
  now: Date = new Date();
  constructor(private formBuilder: FormBuilder) 
  {

    

  }
ngOnInit() 
{
  this.orderForm = this.formBuilder.group({
    customerName: new FormControl('',[Validators.required]),
    email: '',
    items: this.formBuilder.array([])
  });
  this.vacStatus =[{id:1,value:'Vaccinated'},{id:2,value:'Partially Vaccinated'},{id:3,value:'Covid-19 test results'}];
 this.vacTypes = [{id:1,value:'Pfizer-BioNTech'},{id:2,value:'Moderna'},{id:3,value:'Johnson & Johnson’s Janssen'}]
 
 
  }
  get orderFormGroups () {
    return this.orderForm.get('items') as FormArray
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl('test',[Validators.required]),
      description: '',
      price: ''
    });

}
addItem(): void {
  this.items = this.orderForm.get('items') as FormArray;
  this.items.push(this.createItem());
}
ngOnDestroy() {}
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
