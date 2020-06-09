import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-explore-api',
  templateUrl: './explore-api.component.html',
  styleUrls: ['./explore-api.component.css']
})

export class ExploreAPIComponent implements OnInit {

  allshow:boolean=true
  rateshow:boolean=false
  bindshow:boolean=false
  idshow:boolean=false

   HEROES = [
    {id: 1, all:true, cate:'Validate', checked: true, name:'Evidence of Insurance API', desc:'Used to search the customer information. It provides the functionality to retrieves the policy information based on the policy number and line of business along with dates and premium information.'},
    {id: 3, all:true, cate:'Validate', checked: true, name:'Policy Brief API', desc: 'Used in order to see if the person is a Farmers Insurance customer.'},
   
    
    {id: 2, all:true, cate:'Rate', checked: true, name:'Home Quote API (Coming Soon)', desc:'Enables a consumer to create a quote and verifies the quote information. Policy will be quoted in policy center and corresponding coverage and premium details will be passed as response to FFQ.'},
    {id: 5, all:true, cate:'Bind', checked: true, name:'Auto Quote API (Coming Soon)', desc:'Enables a user to create a Home quote in policy center,g et the premium and coverage details for  different package offerings. Premium details will be passed as response.'},

  ];

//Box for showing rating APIS
rateBox(){
  if(this.allshow){
    this.allshow = false
    this.rateshow=true
    for(let item of this.HEROES){
      item.all = false
      item.checked=false
        if(item.cate == 'Rate'){
        item.checked=true
        }
    }
  }else{
    
    for(let item of this.HEROES){
      if(!this.bindshow && !this.idshow){
        this.rateshow=false
        this.allshow=true
        item.checked=true
      }

      if(this.bindshow || this.idshow){
        this.rateshow= false
          if(item.cate == 'Rate'){
            item.checked= !item.checked
          }

      }
    }
      }
    }


//Box for showing binding APIS
bindBox(){
  if(this.allshow){
    this.allshow = false
    this.bindshow=true
    for(let item of this.HEROES){
      item.all = false
      item.checked=false
        if(item.cate == 'Bind'){
        item.checked=true
        }
    }
  }else{
    for(let item of this.HEROES){
      if(!this.rateshow && !this.idshow){
        this.bindshow=false
        this.allshow=true
        item.checked=true
      }

      if(this.rateshow || this.idshow){
        this.bindshow= false
          if(item.cate == 'Bind'){
            item.checked= !item.checked
          }
      }
    }
  }
}

//Box for showing validating APIS
idCardBox(){
  if(this.allshow){
    this.allshow = false
    this.idshow=true
    for(let item of this.HEROES){
    item.all = false
    item.checked=false
      if(item.cate == 'Validate'){
        item.checked=true
      }
    }
  }else{
    for(let item of this.HEROES){
      if(!this.bindshow && !this.rateshow){
        this.idshow=false
        this.allshow=true
        item.checked=true
      }

      if(this.bindshow || this.rateshow){
        this.idshow= false
          if(item.cate == 'Validation'){
            item.checked= !item.checked
          }

      }
    }
  }
}

  constructor() { }

  ngOnInit() {
  }

}
