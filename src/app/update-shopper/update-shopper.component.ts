import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shopper } from '../models/Shopper';
import {ShopperService} from '../services/shopper.service'

@Component({
  selector: 'app-update-shopper',
  templateUrl: './update-shopper.component.html',
  styleUrls: ['./update-shopper.component.css']
})
export class UpdateShopperComponent implements OnInit {
  shopper:Shopper=new Shopper();
  constructor(private shopperService:ShopperService,
    private router:Router) { }

  ngOnInit(): void {
  }
   
  onUpdate(){}
}
