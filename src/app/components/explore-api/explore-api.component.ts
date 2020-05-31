import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-explore-api',
  templateUrl: './explore-api.component.html',
  styleUrls: ['./explore-api.component.css']
})

export class ExploreAPIComponent implements OnInit {

  show_EOI:boolean = false
  show_POL:boolean = false

   APIS = [
    {id: 1, cate:'Policy', checked: true, name:'Evidence of Insurance API', desc:'Used to search the customer information. It provides the functionality to retrieves the policy information based on the policy number and line of business along with dates and premium information.'},
    {id: 3, cate:'Policy', checked: true, name:'CustomersExp API', desc: 'Used to retrieve basic policy information about an individual if they are a Farmers Insurance customer.'},
    {id: 2, cate:'Quote', checked: true, name:'Home Quote API (Coming Soon)', desc:'Enables a consumer to create a quote and verifies the quote information. Policy will be quoted in policy center and corresponding coverage and premium details will be passed as response to FFQ.'},
    {id: 5, cate:'Quote', checked: true, name:'Auto Quote API (Coming Soon)', desc:'Enables a user to create a Home quote in policy center,g et the premium and coverage details for  different package offerings. Premium details will be passed as response.'},
  ];


ToggleList(CATE){

  if(CATE == 'Quote')
  this.show_POL = !this.show_POL

  if(CATE =='Policy')
  this.show_EOI = !this.show_EOI

  if(this.show_EOI && this.show_POL || !this.show_EOI && !this.show_POL)
  this.showAll();

  if(this.show_EOI && !this.show_POL)
  this.showEoi();

  if(!this.show_EOI && this.show_POL)
  this.showPolicy();

}

showPolicy(){
  for(let item of this.APIS){
  item.checked = false;
  
  if(item.cate == 'Quote')
  item.checked = true
  }
}

showAll(){
  for(let item of this.APIS){
    item.checked = true;
  }
}

showEoi(){
  for(let item of this.APIS){
  item.checked = false;
  
  if(item.cate == 'Policy')
  item.checked = true
  }
}



  constructor() { };
  ngOnInit() {  };

}
