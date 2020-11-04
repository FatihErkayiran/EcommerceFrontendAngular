import { Component, OnInit } from '@angular/core';
import {Shopper} from "../models/Shopper"
import { ShopperService } from '../services/shopper.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-list-shopper',
  templateUrl: './list-shopper.component.html',
  styleUrls: ['./list-shopper.component.css']
})
export class ListShopperComponent implements OnInit {
   shoppers:Shopper[]
  
  constructor(private shopperService:ShopperService,
    private router: Router) { }

  ngOnInit(): void {
     this.retrieveShoppers();
      
     
  }
  onUpdate(id){
    this.router.navigate(["http://localhost4200/shoppers/"+id])
  
}
  
  onDelete(i){
     this.shopperService.delete_shopper(i).subscribe(
       response =>{
        console.log(response);
        this.router.navigate(['/list_shopper'])
        
       
     }
     )
  }

     retrieveShoppers(){
      this.shopperService.get_shoppers().subscribe(data =>{
        console.log("test");
        console.log(data)
        this.shoppers = data
      })
    }

     refreshList(){
         this.retrieveShoppers();
     }
    
   
}
