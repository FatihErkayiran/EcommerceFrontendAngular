import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListShopperComponent} from "./list-shopper/list-shopper.component"
import { AddShopperComponent } from "./add-shopper/add-shopper.component"
import {UpdateShopperComponent} from "./update-shopper/update-shopper.component"

 export const routes: Routes = [
{path:"list_shopper", component:ListShopperComponent},
{path:"add_shopper",  component:AddShopperComponent},
{path:"edit_shopper", component:UpdateShopperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
