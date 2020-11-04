import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shopper } from '../models/Shopper';
import { ShopperService } from '../services/shopper.service';

@Component({
  selector: 'app-add-shopper',
  templateUrl: './add-shopper.component.html',
  styleUrls: ['./add-shopper.component.css']
})
export class AddShopperComponent implements OnInit {

 shopper:Shopper=new Shopper();

  constructor(private shopperService:ShopperService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
      this.shopperService.add_shopper(this.shopper).subscribe(data =>{
       this.router.navigate(['/list_shopper'])
     })
  }

}
